const fs = require('fs');

module.exports = function (fileName) {
    // cat code
    
    fs.readFile(fileName, 'utf8', (err, data) => {
        if(err){
            throw err;
        } else{
            process.stdout.write(data);
            process.stdout.write('\nprompt > ');
        }
      });

  };
