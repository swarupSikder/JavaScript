var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');

let name = lines.shift();
let mainSalary = parseFloat(lines.shift());
let sale = parseFloat(lines.shift());
let total = mainSalary + sale*15/100;

//print
console.log(`TOTAL = R$ ${total.toFixed(2)}`);