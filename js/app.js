'use strict';

let userName = prompt('What Is Your Name?');
alert('Hello '+userName+', It\'s My Pleasure to Meet You.');
alert('Before We Get Into The Webpage, Lets Play a Quick Gussing Game ☺☺');

//Number of correct answers
let answer = 0 ;

function yesQuestion(q){
   
    if ((q=='yes') || (q=="y")){
        //console.log('Wrong Answer.');
        alert('Oops, That\'s Wrong');
    } else if ((q==="no") || (q=="n")){
        //console.log('Correct Answer.');
        alert('Yay, That\'s Right');  
        answer = answer+1;
    }
    
}
function noQuestion(q){
   
    if ((q2=='yes') || (q2=="y")){
        //console.log('Correct Answer.');
        alert('Yay, That\'s Right I Do.');
        answer = answer+1;
    } else if ((q2==="no") || (q2=="n")){
        //console.log('Wrong Answer.');
        alert('Oops, That\'s Wrong');  
    }
    
}
let q1 = prompt('Do you think that I am originally from Jordan?').toLowerCase();

while( (q1 != 'yes') && (q1 != 'y')&& (q1 != 'no') && (q1 != 'n')){
    alert('Please answer with (Yes,y) or (No,n).');
    q1 = prompt('Do you think that I am originally from Jordan?').toLowerCase();
}
yesQuestion(q1);




// Questin II

let q2 = prompt('Do you think that I love programing & coding?').toLowerCase();

while( (q2 != 'yes') && (q2 != 'y')&& (q2 != 'no') && (q2 != 'n')){
    alert('Please answer with (Yes,y) or (No,n).');
    q2 = prompt('Do you think that I love programing & coding?').toLowerCase();
}
noQuestion(q2);

// Questin III
let q3 = prompt('Do you think that working-out is one of my favourite hobbies?').toLowerCase();

while( (q3 != 'yes') && (q3 != 'y')&& (q3 != 'no') && (q3 != 'n')){
    alert('Please answer with (Yes,y) or (No,n).');
    q3 = prompt('Do you think that working-out is one of my favourite hobbies?').toLowerCase();
}
noQuestion(q3);


// Questin IV
let q4 = prompt('Do you think that I am vegetarian?').toLowerCase();

while( (q4 != 'yes') && (q4 != 'y')&& (q4 != 'no') && (q4 != 'n')){
    alert('Please answer with (Yes,y) or (No,n).');
    q4 = prompt('Do you think that I am vegetarian?').toLowerCase();
}

yesQuestion(q4);


// Questin V
let q5 = prompt('Do you think that I love waking up earlly?').toLowerCase();

while( (q5 != 'yes') && (q5 != 'y')&& (q5 != 'no') && (q5 != 'n')){
    alert('Please answer with (Yes,y) or (No,n).');
    q5 = prompt('Do you think that I love waking up earlly?').toLowerCase();
}

yesQuestion(q5);



//Questin VI
let q6 = prompt('How many years of experinec do you think I have?');

for(let i=0; i<4; i++){
    if (q6==5){
        alert('Wow, You Gussed It.'); 
        console.log('Correct Answer.');
        answer = answer+1;
        break 
    } else {
        if (q6>5){alert('Oops, That\'s Wrong It\'s Less Than That!'); }
         else {alert('Oops, That\'s Wrong It\'s More Than That!'); }
        if (i==3){ 
            alert('Sorry, you have exceeded the maximum number of attempts, I Have 5 Years Experience. ');
            console.log('Incorrect Answer.');
            break   
        }
        q6 = prompt('How many years of experinec do you think I have?');
    }
}
yesQuestion(q1);


// Questin VII
let q7 = prompt('What do you think my favorite color is?').toLowerCase();
let color = ['blue', 'black', 'purple', 'yellow' ,'red'];
let breakPoint = false ;
for(let i=0; i<7; i++){
   
    for (let index = 0; index < color.length; index++) {
        if (q7===color[index]){
            alert('Yay, That\'s Right It\'s one of my favorites.'); 
            answer = answer+1;
            breakPoint =true;
            console.log('Correct Answer.');
            break
        }
    }

   if (breakPoint=== true){
       break 
   }

   if (i==6){ 
     alert('Sorry, you have exceeded the maximum number of attempts, These Are My Favoites: '+color);
     console.log('Incorrect Answer.');
      break 
   } 

   alert('Oops, That\'s Wrong.'); 
   q7 = prompt('What do you think my favorite color is?').toLowerCase();
    
}
    
alert ('You Got '+answer+' Out of 7 '+userName+'. Thank You for Playing ☺☺☺☺');



