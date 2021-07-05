'use strict';

let userName = prompt('What is your name?');
alert('Hello '+userName+', it\'s my pleasure to meet you.');
alert('Before we get into the webpage, lets play a quick Yes or No game ☺☺');

//Number of correct answers
let answer = 0 ;

// Questin I
let q1 = prompt('Do you think that I am originally from Jordan?').toLowerCase();

while( (q1 != 'yes') && (q1 != 'y')&& (q1 != 'no') && (q1 != 'n')){
    alert('Please answer with (Yes,y) or (No,n).');
    q1 = prompt('Do you think that I am originally from Jordan?').toLowerCase();
}
if ((q1=='yes') || (q1=="y")){
    //console.log('Wrong Answer.');
    alert('Oops, That\'s Wrong');
} else if ((q1==="no") || (q1=="n")){
    //console.log('Correct Answer.');
    alert('Yay, That\'s Right');  
    answer = answer+1;
}

// Questin II
let q2 = prompt('Do you think that I love programing & coding?').toLowerCase();

while( (q2 != 'yes') && (q2 != 'y')&& (q2 != 'no') && (q2 != 'n')){
    alert('Please answer with (Yes,y) or (No,n).');
    q2 = prompt('Do you think that I love programing & coding?').toLowerCase();
}
if ((q2=='yes') || (q2=="y")){
    //console.log('Correct Answer.');
    alert('Yay, That\'s Right I Do.');
    answer = answer+1;
} else if ((q2==="no") || (q2=="n")){
    //console.log('Wrong Answer.');
    alert('Oops, That\'s Wrong');  
}

// Questin III
let q3 = prompt('Do you think that working-out is one of my favourite hobbies?').toLowerCase();

while( (q3 != 'yes') && (q3 != 'y')&& (q3 != 'no') && (q3 != 'n')){
    alert('Please answer with (Yes,y) or (No,n).');
    q3 = prompt('Do you think that working-out is one of my favourite hobbies?').toLowerCase();
}
if ((q3=='yes') || (q3=="y")){
    //console.log('Correct Answer.');
    alert('Yay, That\'s Right');
    answer = answer+1;
} else if ((q3==="no") || (q3=="n")){
    //console.log('Wrong Answer.');
    alert('Oops, That\'s Wrong');  
}

// Questin IV
let q4 = prompt('Do you think that I am vegetarian?').toLowerCase();

while( (q4 != 'yes') && (q4 != 'y')&& (q4 != 'no') && (q4 != 'n')){
    alert('Please answer with (Yes,y) or (No,n).');
    q4 = prompt('Do you think that I am vegetarian?').toLowerCase();
}
if ((q4=='yes') || (q4=="y")){
    //console.log('Wrong Answer.');
    alert('Oops, That\'s Wrong');
} else if ((q4==="no") || (q4=="n")){
   //console.log('Correct Answer.');
    alert('Yay, That\'s Right, Who Dosn\'t Love Meat!!'); 
    answer = answer+1; 
}

// Questin V
let q5 = prompt('Do you think that I love waking up earlly?').toLowerCase();

while( (q5 != 'yes') && (q5 != 'y')&& (q5 != 'no') && (q5 != 'n')){
    alert('Please answer with (Yes,y) or (No,n).');
    q5 = prompt('Do you think that I love waking up earlly?').toLowerCase();
}
if ((q5=='yes') || (q5=="y")){
    //console.log('Wrong Answer.');
    alert('Oops, That\'s Wrong');
} else if ((q5==="no") || (q5=="n")){
   //console.log('Correct Answer.');
    alert('Yay, That\'s Right I Love to Sleep.'); 
    answer = answer+1; 
}

alert ('You Got '+answer+' Out of 5 '+userName+'. Thank You for Playing ☺☺☺☺');
