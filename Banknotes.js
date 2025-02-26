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
    let amount = parseInt(input[0][0]);
    let noteCount;

    //print the original
    console.log(`${amount}`);

    //calculation
    if(amount >= 500){
        noteCount = parseInt(amount/100);
        console.log(`${noteCount} nota(s) de R$ 100,00`);
        amount = amount - noteCount*100;
    }
    else{
        console.log(`0 nota(s) de R$ 100,00`);
    }

    if(amount >= 50){
        noteCount = parseInt(amount/50);
        console.log(`${noteCount} nota(s) de R$ 50,00`);
        amount = amount - noteCount*50;
    }
    else{
        console.log(`0 nota(s) de R$ 50,00`);
    }

    if(amount >= 20){
        noteCount = parseInt(amount/20);
        console.log(`${noteCount} nota(s) de R$ 20,00`);
        amount = amount - noteCount*20;
    }
    else{
        console.log(`0 nota(s) de R$ 20,00`);
    }

    if(amount >= 10){
        noteCount = parseInt(amount/10);
        console.log(`${noteCount} nota(s) de R$ 10,00`);
        amount = amount - noteCount*10;
    }
    else{
        console.log(`0 nota(s) de R$ 10,00`);
    }

    if(amount >= 5){
        noteCount = parseInt(amount/5);
        console.log(`${noteCount} nota(s) de R$ 5,00`);
        amount = amount - noteCount*5;
    }
    else{
        console.log(`0 nota(s) de R$ 5,00`);
    }

    if(amount >= 2){
        noteCount = parseInt(amount/2);
        console.log(`${noteCount} nota(s) de R$ 2,00`);
        amount = amount - noteCount*2;
    }
    else{
        console.log(`0 nota(s) de R$ 2,00`);
    }

    if(amount >= 1){
        noteCount = parseInt(amount/1);
        console.log(`${noteCount} nota(s) de R$ 1,00`);
        amount = amount - noteCount*1;
    }
    else{
        console.log(`0 nota(s) de R$ 1,00`);
    }

});