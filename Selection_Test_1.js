const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input.push(line.split(' '));
}).on('close', () => {
    //--------//
    //--main--//
    //--------//
    let a, b, c, d;
    a = input[0][0];
    b = input[0][1];
    c = input[0][2];
    d = input[0][3];

    if (b > c && d > a && (c + d) > (a + b) && c > 0 && d > 0 && a % 2 == 0) {
        console.log(`Valores aceitos`);
    }
    else {
        console.log(`Valores nao aceitos`);
    }

});