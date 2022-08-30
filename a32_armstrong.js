var prompt = require('prompt-sync')();

let input = prompt("Enter any number to find out Armstrong or not : ");

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
    sum = sum +  digit[j] * digit[j] * digit[j] ;
}

//console.log("sum = " + sum);

if( sum == input){
    console.log(input + " is an Armstrong number");
}
else{
    console.log(input + " is NOT an Armstrong number");
}