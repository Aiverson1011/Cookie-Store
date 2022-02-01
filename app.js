'use strict'

//////////////////
// define the variable named "name" and set the value to the user input of the prompt
function yourName(){
    let name = prompt('What is your name?');
    console.log('Hello, ' + name);
    return name;
}


function timeOfDay(){
    let time = prompt('What time is it?'); // 15;
    let message = '';
    
    if(time <= 11){
        message = 'Good Morning!';
    } else if (time <= 18){
        message = 'Good Afternoon!';
      
    }  else if(time <= 24){
        message = "Good Evening!";
    } else {
        message = "Time does not exist!";
    }

    return message;
}

function tellMeAStory(){

    return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae. Sit amet dictum sit amet. Non sodales neque sodales ut etiam sit amet nisl. Scelerisque viverra mauris in aliquam sem fringilla ut. Aliquet risus feugiat in ante. Vitae suscipit tellus mauris a diam maecenas sed enim ut. Nisl nisi scelerisque eu ultrices. In massa tempor nec feugiat. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Nunc vel risus commodo viverra maecenas accumsan lacus>';
}
