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
    let time = parseInt(input[0][0]);
    let next;
    let h=0, m=0, s=0;

    //calculation
    if(time >= 3600){
        next = parseInt(time/3600);
        h = next;
        time = time - next*3600;
    }

    if(time >= 60){
        next = parseInt(time/60);
        m = next;
        time = time - next*60;
    }

    s = time;

    console.log(`${h}:${m}:${s}`);
    

});