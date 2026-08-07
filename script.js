const button1=document.querySelector(`#choice-button1`);
const button2=document.querySelector(`#choice-button2`);
const button3=document.querySelector(`#choice-button3`);
const button4=document.querySelector(`#restart`);
const button5=document.querySelector(`#start`);
const message1=document.querySelector(`#human-choice`);
const message2=document.querySelector(`#computer-choice`);
const message3=document.querySelector(`#human-score`);
const message4=document.querySelector(`#computer-score`);
const message5=document.querySelector(`#remark`);
const message6=document.querySelector(`#winner`);

let round=0;
let computerscore=1;
let humanscore=1;


function playround(){


button1.addEventListener(`click`,()=>{
    if(round>=5){
        return;
    }
    message1.textContent=`ROCK`;

    
});

button2.addEventListener(`click`,()=>{
     if(round>=5){
        return;
    }
    message1.textContent=`PAPER`;

   

});

button3.addEventListener(`click`,()=>{
      if(round>=5){
    return;
  }
    message1.textContent=`SCISSORS`;
  
});
};

playround()



function playround2(){

    
    


button5.addEventListener(`click`,()=>{

    if(round>=5){
        return;
    }
    

   const decision=Math.floor(Math.random()*3);
   if (decision==0){
    message2.textContent= `ROCK`;
   }
   else if (decision==1){
    message2.textContent= `PAPER`;
   }
   else {
    message2.textContent= `SCISSORS`;
   }


let computerchoice=message2.textContent;
let humanchoice=message1.textContent;



    if(humanchoice==`ROCK`&& computerchoice==`ROCK`|| humanchoice==`PAPER`&& computerchoice==`PAPER`|| humanchoice==`SCISSORS`&&computerchoice==`SCISSORS`){
        message5.textContent=`This is a tie`;
    }
    else if(humanchoice==`ROCK`&& computerchoice==`SCISSORS`){
        message5.textContent=`You win!!`;
        message3.textContent=humanscore++;
    }
    else if(humanchoice==`PAPER`&& computerchoice==`ROCK`){
        message5.textContent=`You win!`;
        message3.textContent=humanscore++;
    }
    else if(humanchoice==`SCISSORS`&& computerchoice==`PAPER`){
        message5.textContent= `You win!`;
        message3.textContent=humanscore++;
    }
    else{
        message5.textContent= `Sorry!The Bot wins`;
        message4.textContent=computerscore++;
    }
    round++;

    if (round===5){
    if(humanscore>computerscore){
        message6.textContent=`Congrats! You won the game!!`
    }
    else if (computerscore>humanscore){
        message6.textContent=`Sorry!The Bot wins the game.`
    }
    else{
        message6.textContent=`The Match is tied!`
    }
    }
});
};
playround2()

button4.addEventListener(`click`,()=>{
     round=0;
     humanscore=1;
     message3.textContent=humanscore;
     computerscore=1;
     message4.textContent=computerscore;
     message5.textContent=`REMARK`;
     message6.textContent=`GAME RESULT`;
});


   