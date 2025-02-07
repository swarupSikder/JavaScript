var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');


//input
let r = parseFloat(lines.shift());
const pi = 3.14159;

//calculate
let vol = (4/3)*pi*r*r*r;

//print
console.log(`VOLUME = ${vol.toFixed(3)}`);