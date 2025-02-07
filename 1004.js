var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');

let x = parseInt(lines.shift());
let y = parseInt(lines.shift());
console.log(`PROD = ${x*y}`);