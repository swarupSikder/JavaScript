/*
Problem:
take two integer number and show there sum

input: 
the problem will have several test cases, first line of the test
case will contain two numbers

output:
show the sum of those numbers

input:
4
23 34
45 10
10 10
11 11

output:
57
55
20
22

*/

var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');

//--------//
//--main--//
//--------//
let t = parseInt(lines.shift());

for (let i = 0; i < t; i++) {
    //input
    var cols = lines[i].split(' ');

    let a, b;

    a = parseInt(cols[0]); //first column input
    b = parseInt(cols[1]); //second column input

    console.log(`${a + b}`);

}