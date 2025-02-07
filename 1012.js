var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8'); // Read from a file instead of stdin
var lines = input.split('\n');


//input
var cols = lines[0].split(' ');
let a = parseFloat(cols[0]);
let b = parseFloat(cols[1]);
let c = parseFloat(cols[2]);

//calculate
let triangle = (1/2)*a*c;
let circle = 3.14159*c*c;
let trapezium = (1/2)*(a+b)*c;
let square = b*b;
let rectangle = a*b;

//print
console.log(`TRIANGULO: ${triangle.toFixed(3)}`);
console.log(`CIRCULO: ${circle.toFixed(3)}`);
console.log(`TRAPEZIO: ${trapezium.toFixed(3)}`);
console.log(`QUADRADO: ${square.toFixed(3)}`);
console.log(`RETANGULO: ${rectangle.toFixed(3)}`);