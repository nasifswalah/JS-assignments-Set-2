// 1. write a js program to console the multiplication table of a number


var readlineSync = require('readline-sync');

let number = parseInt(readlineSync.question('Enter the number for multiplication table: '));
let limit = parseInt(readlineSync.question('Enter the limit for multiplication table: '));

console.log('Multiplication table of ',number);
for(let i = 1; i<=limit; i++){
    console.log(i,' * ',number,' = ',i*number);
}