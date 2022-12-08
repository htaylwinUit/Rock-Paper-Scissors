let rock= document.querySelector('#rock');
let paper= document.querySelector('#paper');
let scissors= document.querySelector('#scissors');
let result;
let selection;
let score;
let playerScore = 0;
let computerScore = 0;

// Getting Input
rock.addEventListener('click',() => playerChoice('rock'));
paper.addEventListener('click',() => playerChoice('paper'));
scissors.addEventListener('click',() => playerChoice('scissors'));

//Play and Output
function playerChoice(selection){
  console.log(selection);
  computerRandom();
  console.log(computerGuess);
  playRound(selection,computerGuess);
  document.getElementById("player_score").innerHTML="SCORE : "+ playerScore;
  document.getElementById("computer_score").innerHTML="SCORE : "+ computerScore;
  game();
  document.getElementById("player_score").innerHTML="SCORE : "+ playerScore;
  document.getElementById("computer_score").innerHTML="SCORE : "+ computerScore;
}

//Score
function game(){
  if(playerScore==5){
    alert("You win the game.");
    playerScore=0;
    computerScore=0;
  } else if(computerScore==5){
    alert("You lose.");
    playerScore=0;
    computerScore=0;
  }
  
}

// Computer Random
let computerGuess;
function computerRandom() {
  let computerNumber = random(3);
  switch (computerNumber) {
    case 1: computerGuess = "rock"; break;
    case 2:computerGuess = "paper"; break;
    case 3:computerGuess = "scissors"; break;
    default:break;
  }
  return computerGuess;
}
function random(number) {
  return Math.floor(Math.random() * number + 1);
}

// Game Play
function playRound(selection,computerGuess){
  switch (selection){
    case "rock": 
      switch (computerGuess){
        case "rock" : result = "Draw! Both sides are the same."; break;
        case "paper" : result = "You lose! Paper beats Rock.";computerScore++; break;
        case "scissors" : result = "You win! Rock beats Scissors.";playerScore++; break;
        default : break;
      }; break;
    case "paper":
      switch (computerGuess){
        case "rock" : result = "You win! Paper beats Rock.";playerScore++; break;
        case "paper" : result = "Draw! Both sides are the same."; break;
        case "scissors" : result = "You lose! Scissors beats Paper.";computerScore++; break;
        default : break;
      }; break;
    case "scissors":
      switch (computerGuess){
        case "rock" : result = "You lose! Rock beats Scissors.";computerScore++; break;
        case "paper" : result = "You win! Scissors beats Paper.";playerScore++; break;
        case "scissors" : result = "Draw! Both sides are the same."; break;
        default : break;
      }; break;   
}
document.getElementById("messageBox").innerHTML=result;
}



