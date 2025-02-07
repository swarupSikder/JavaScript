var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');

let r = parseFloat(lines.shift());
const pi = 3.14159;
console.log(`A=${(pi*r*r).toFixed(4)}`);