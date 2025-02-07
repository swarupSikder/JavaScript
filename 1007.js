var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');

let a = parseFloat(lines.shift());
let b = parseFloat(lines.shift());
let c = parseFloat(lines.shift());
let d = parseFloat(lines.shift());
let val = a*b - c*d;
console.log(`DIFERENCA = ${val}`);