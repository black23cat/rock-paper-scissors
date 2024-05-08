function getComputerChoice() {
    let a = Math.floor(Math.random() * 6),
        b;
    if (a >= 0 && a <= 2){
      b = 'rock'
    }else if (a >= 3 && a <= 4){
      b = 'paper'
    }else{
      b = 'scissors'
    }
    return b;
  }

function getHumanChoice(){
    let choice =  prompt('Choose your weapon Rock, Paper or Scissors.');
    return choice.toLowerCase() || alert ('Canceled');
}

function playRound(humanChoice, computerChoice){
    let message =  (humanChoice === computerChoice) ?  'Draw!'
    : (humanChoice === 'rock') && (computerChoice === 'paper') ? 'You Lose, Paper beat Rock'
    : (humanChoice === 'rock') && (computerChoice === 'scissors') ? 'You Win, Rock beat Scissors' 
    : (humanChoice === 'paper') && (computerChoice === 'scissors') ? 'You Lose, Scissors beat Paper' 
    : (humanChoice === 'paper') && (computerChoice === 'rock') ? 'You Win, Paper beat Rock' 
    : (humanChoice === 'scissors') && (computerChoice === 'paper') ? 'You Win, Scissors beat Paper' 
    : (humanChoice === 'scissors') && (computerChoice === 'Rock') ? 'You Lose, Rock beat Scissors' 
    : 'Please choose rock, paper or scissors';
    return message;
}

let humanScore = 0;
let computerScore = 0;