const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let sum = 0;
getNumber();

function getNumber(){
    readline.question('Enter stop or a number ', nbr => {
        if(nbr != 'stop'){
            sum+= parseInt(nbr);
            process.nextTick(getNumber);
        }else{
            console.log('sum = ' + sum);
            readline.close;
        }       
    });
}