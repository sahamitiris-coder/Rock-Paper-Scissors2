function getcomputerchoice(){
    let randomnumber=(Math.floor(Math.random()*3));
    if (randomnumber===0)
        return("rock");
    else if (randomnumber===1)
        return("paper");
    else
        return("scissors");

    
};


function gethumanchoice(){
    let choice=(prompt("Enter:"));
    return choice;
};






function playround(computerchoice,humanchoice){
   
    if(
        (computerchoice===humanchoice)
     ) {
     return("It's a tie");
     }
     else if(
        
        (computerchoice==="rock"&&humanchoice==="scissors")
        ||(computerchoice==="paper"&&humanchoice==="rock")
        ||(computerchoice==="scissors"&&humanchoice==="paper")
     ){
     
     return("Computer wins!");
     }
     else {
            
             return("You win!!");
     }
        
     

     
     


console.log(playround(getcomputerchoice(),gethumanchoice()));

};
function playgame(){
    let humanscore=(Number(0));
    let computerscore=(Number(0));

    let i=0;
    for(i=0;i<5;i++){
       let one= getcomputerchoice();
        let two=gethumanchoice();
        if(one===two){
        
        }
        else if(one>two){
            computerscore++;
            
        }
        else{
              humanscore++;
            
        }
    }console.log(`Rajveer=${humanscore}`);
    console.log(`Bot=${computerscore}`);

        if (humanscore===computerscore)
            return("Match tied!");
        else if(humanscore>computerscore)
            return("Congratulations! You won the match!!");
        else
            return("Sorry!The computer wins");


};
console.log(playgame());