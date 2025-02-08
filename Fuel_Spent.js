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
    let time = parseInt(input[0][0]);
    let velocity = parseInt(input[1][0]);

    //calculation
    let distance = velocity*time;
    let spentFuel = distance/12;

    //print
    console.log(`${spentFuel.toFixed(3)}`);
});