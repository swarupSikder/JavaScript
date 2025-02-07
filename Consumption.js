const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    let distance = parseFloat(input[0]);
    let fuel = parseFloat(input[1]);

    let consumption = distance / fuel;
    console.log(`${consumption.toFixed(3)} km/l`);
});
