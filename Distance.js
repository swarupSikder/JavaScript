const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input.push(line.split(' '));
}).on('close', () => {
    //--------//
    //--main--//
    //--------//
    let x = parseInt(input[0][0]);

    //calculation
    let distance = x*2;

    //print
    console.log(`${distance} minutos`);
});