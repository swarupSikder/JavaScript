var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');

let number = parseInt(lines.shift());
let workingHour = parseInt(lines.shift());
let salaryPerHour = parseFloat(lines.shift());

//print
console.log(`NUMBER = ${number}`);
console.log(`SALARY = U$ ${(workingHour*salaryPerHour).toFixed(2)}`);