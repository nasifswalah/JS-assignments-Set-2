// 3 .  write a js program to console the grade of a student using if else if


var readlineSync = require('readline-sync');

let mark = parseInt(readlineSync.question('Enter your mark :'));

if(mark>90){
    console.log('Your garde is A');
}
else if(mark>80){
    console.log('Your garde is B');
}
else if(mark>70){
    console.log('Your grade is C');
}
else if(mark>60){
    console.log('Your grade is D');
}
else if(mark>=50){
    console.log('Your garde is E');
}
else{
    console.log('You are failed');
}
