var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');


//input
var cols = lines[0].split(' ');

let arr = [];
for(let i=0; i<3 ;i++){
    arr.push(parseInt(cols[i]));
}

//calculate
let mx = Math.max(...arr);

//print
console.log(`${mx} eh o maior`);