var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');


//input
let distance = parseFloat(lines.shift());
let fuel = parseFloat(lines.shift());

//calculate
let consumption = distance/fuel; 

//print
console.log(`${consumption.toFixed(3)} km/l`);