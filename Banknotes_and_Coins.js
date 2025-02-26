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
    function addNote(note) {
        if (amount >= note) {
            noteCount = parseInt(amount / note);
            console.log(`${noteCount} nota(s) de R$ ${note}.00`);
            amount = amount - noteCount * note;
        }
        else {
            console.log(`0 nota(s) de R$ ${note}.00`);
        }
    }

    function addCoin(coin) {
        if (amount >= coin) {
            coinCount = parseInt(amount / coin);
            if(coin == 5 || coin == 1){
                console.log(`${coinCount} moeda(s) de R$ 0.0${coin}`);
            }
            else{
                console.log(`${coinCount} moeda(s) de R$ 0.${coin}`);
            }
            amount = amount - coinCount * coin;
        }
        else {
            if(coin == 5 || coin == 1){
                console.log(`0 moeda(s) de R$ 0.0${coin}`);
            }
            else{
                console.log(`0 moeda(s) de R$ 0.${coin}`);
            }
        }
    }


    let mainAmount = parseFloat(input[0][0]);
    let amount = parseInt(mainAmount);
    let noteCount;

    //print the Note Count
    console.log(`NOTAS:`);
    addNote(100);
    addNote(50);
    addNote(20);
    addNote(10);
    addNote(5);
    addNote(2);

    //split the frac
    let fracPart = (mainAmount - parseInt(mainAmount)) * 100;

    //print the Coin Count
    console.log(`MOEDAS:`);

    if (amount >= 1) {
        noteCount = parseInt(amount / 1);
        console.log(`${noteCount} moeda(s) de R$ 1.00`);
        amount = amount - noteCount * 1;
    }
    else {
        console.log(`0 moeda(s) de R$ 1.00`);
    }

    amount = fracPart.toFixed(0);
    addCoin(50);
    addCoin(25);
    addCoin(10);
    addCoin(5);
    addCoin(1);


});