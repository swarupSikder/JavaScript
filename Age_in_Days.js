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
    let age = parseInt(input[0][0]);
    let year=0, month=0, day=0;

    //calculation
    if(age >= 365){
        next = parseInt(age/365);
        year = next;
        age = age - next*365;
    }

    if(age >= 30){
        next = parseInt(age/30);
        month = next;
        age = age - next*30;
    }

    day = age;

    console.log(`${year} ano(s)`);
    console.log(`${month} mes(es)`);
    console.log(`${day} dia(s)`);
});