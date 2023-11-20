// 5.Write a program to find the number of even numbers in an array
// a. 	The program should accept an array and display the number of even numbers contained in that array


var readlineSync = require('readline-sync');

let size = parseInt(readlineSync.question('Enter the size of array: '));
let number = [];
let count = 0;

for(let i = 0; i<size; i++){

    number[i] = parseInt(readlineSync.question('Enter the element for index '+i+' : '));
    if(number[i]%2===0){
        count = count + 1;
    }

}
console.log('The number of Even number in this array = ',count);
