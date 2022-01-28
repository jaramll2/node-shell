// //Output a prompt
// process.stdout.write('prompt > ');

// //the stdin 'data' event fires after a user types in a line
// process.stdin.on('data', (data)=>{
//     const cmd = data.toString().trim(); //remove the newLine

//    // process.stdout.write('You typed: ' + cmd);
    
//     if(cmd === 'pwd'){
//         let cwd = process.cwd();
//         console.log(cwd.trim());
//     }

//     process.stdout.write('prompt > ');
// });

const cat = require('./cat');
const ls = require('./ls');
const pwd = require('./pwd');


process.stdout.write('prompt > ');

process.stdin.on('data', (data)=>{
    const cmd = data.toString().trim(); //remove the newLine

    // process.stdout.write('You typed: ' + cmd);
    
    //tokenize the input into an array separated by white space
    const args = cmd.split(' ');
    const fileName = args[1];

    if(cmd === 'pwd'){
        pwd();
    }
    
    if(cmd === 'ls'){
        ls();
    }

    if(args[0] === 'cat'){
        
        cat(fileName);
    }
});



