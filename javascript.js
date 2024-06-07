function getComputerChoice() {
  let a = Math.floor(Math.random() * 3);
  return (a === 1)? 'rock'
	:(a === 2)? 'paper'
	:'scissors';
}

function getHumanChoice(){
  let choice =  prompt('Choose your weapon Rock, Paper or Scissors.');
  return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice){
	if (humanChoice === computerChoice){
		return  `Draw! ${humanChoice.toUpperCase()} vs ${computerChoice.toUpperCase()}.`;
	} else if (humanChoice === 'rock' && computerChoice === 'paper'){
		return 'You Lose, Rock vs Paper';
	} else if (humanChoice === 'rock' && computerChoice === 'scissors'){
		return 'You Win, Rock vs Scissors';
	} else if (humanChoice === 'paper' && computerChoice === 'scissors'){
		return 'You Lose, Paper vs Scissors';
	} else if (humanChoice === 'paper' && computerChoice === 'rock'){
		return 'You Win, Paper vs Rock';
	} else if (humanChoice === 'scissors' && computerChoice === 'paper'){
		return 'You Win, Scissors vs Paper';
	} else if (humanChoice === 'scissors' && computerChoice === 'rock'){
		return 'You Lose, Scissors vs Rock';
	}
}

let humanScore = 0;
let computerScore = 0;


function playGame(){
  playerSelection = getHumanChoice();
  humanSelection = playerSelection.toLowerCase();
  computerSelection = getComputerChoice();
  result = playRound(humanSelection, computerSelection);

  if (result.startsWith('You Win')){
     humanScore++;
  } else if (result.startsWith('You Lose')){
    computerScore++;
  }
}

playGame();
console.log(playRound(humanSelection, computerSelection));
console.log(`Your score ${humanScore} vs Computer score ${computerScore}`);

playGame();
console.log(playRound(humanSelection, computerSelection));
console.log(`Your score ${humanScore} vs Computer score ${computerScore}`);

playGame();
console.log(playRound(humanSelection, computerSelection));
console.log(`Your score ${humanScore} vs Computer score ${computerScore}`);

playGame();
console.log(playRound(humanSelection, computerSelection));
console.log(`Your score ${humanScore} vs Computer score ${computerScore}`);

playGame();
console.log(playRound(humanSelection, computerSelection));
console.log(`Your score ${humanScore} vs Computer score ${computerScore}`);

function finalResult(){
  if (humanScore > computerScore){
    return 'You win Congratulations!';
  } else if (humanScore < computerScore){
    return 'You Lose, Try again later.';
  } else {
    return 'Tie';
  }
}

console.log (finalResult())