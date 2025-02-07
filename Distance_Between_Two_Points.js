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
    let x1 = parseFloat(input[0][0]);
    let y1 = parseFloat(input[0][1]);
    let x2 = parseFloat(input[1][0]);
    let y2 = parseFloat(input[1][1]);

    //calculation
    let distance = Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2));

    //print
    console.log(`${distance.toFixed(4)}`);
});