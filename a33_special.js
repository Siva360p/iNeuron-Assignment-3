var prompt = require('prompt-sync')();

let input = prompt("Enter any number to find out Special number or not : ");

let digit = [];
let i = 0, n = input;
do{
    digit[i] = n % 10;
    i++;
    n = parseInt(n / 10);
}while(n >= 1);

//console.log(digit);

let sum = 0;
for (let j=0; j < digit.length ; j++){
    sum = sum +  factorial(digit[j]);
}

//console.log("sum = " + sum);
function factorial(f){
    let x=f, y=f;

    while(x>1){
        y=y*(x-1);
        x--;
    }
    return y;
}

if( sum == input){
    console.log(input + " is a Special number");
}
else{
    console.log(input + " is NOT a Special number");
}