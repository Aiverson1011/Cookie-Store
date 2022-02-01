'use strict'

// define the variable named "name" and set the value to the user input of the prompt
let name = prompt('What is your name?');
console.log('Hello, ' + name);

let time = prompt('What time is it?'); // 15;

// new variable named message equal to an empty string
let message = '';

/*
This is a conditional statement determining the value
of message dependant upon the user input of time from
the prompt
*/

if(time <= 11){
    message = 'Good Morning!';
} else if (time <= 18){
    message = 'Good Afternoon!';
  
}  else if(time <= 24){
    message = "Good Evening!";
} else {
    message = "Time does not exist!";
}

console.log('Amanda was here');
document.write('Hello ' + name + '! ' + message);
