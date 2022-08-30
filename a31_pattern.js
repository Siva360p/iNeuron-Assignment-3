var prompt = require('prompt-sync')();

let rows = prompt("Enter number of rows in the pyramid : ");
let n=1;
for(let i=1; i<=rows; i++){
    let row = '';
    
    for(let j=1; j<=i; j++){
        row = row + n + ' ';
        n++;
    }
    console.log(row);
}