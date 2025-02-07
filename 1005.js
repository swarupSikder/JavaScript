var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');

let x = parseFloat(lines.shift());
let y = parseFloat(lines.shift());
let avg = (x*3.5 + y*7.5)/11;
console.log(`MEDIA = ${avg.toFixed(5)}`);