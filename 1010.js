var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');


//product (1)
var cols = lines[0].split(' ');
let p1_code = parseInt(cols[0]);
let p1_units = parseInt(cols[1]);
let p1_perUnitPrice = parseFloat(cols[2]);

//product (2)
var cols = lines[1].split(' ');
let p2_code = parseInt(cols[0]);
let p2_units = parseInt(cols[1]);
let p2_perUnitPrice = parseFloat(cols[2]);

//calculate total
let total = p1_units*p1_perUnitPrice + p2_units*p2_perUnitPrice;

//print
console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);