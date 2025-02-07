var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');

let x = parseFloat(lines.shift());
let y = parseFloat(lines.shift());
let z = parseFloat(lines.shift());
let avg = (x*2 + y*3 + z*5)/10;
console.log(`MEDIA = ${avg.toFixed(1)}`);