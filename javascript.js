const container = document.querySelector('#container');
const rndResult = document.querySelector('.round-result');
const score = document.querySelector('.score');
const gameWinner = document.querySelector('.winner');
const reset = document.querySelector('.reset')

let humanScore = 0;
let computerScore = 0;

reset.addEventListener('click', () =>{
  rndResult.textContent = "";
  score.textContent = "";
  gameWinner.textContent = "";
  humanScore = 0;
  computerScore = 0;
});

container.addEventListener('click', (e) => {
  playGame();

  function playGame(){
    playerSelection = e.target.value;
    computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);
  
    if (result.startsWith('You Win')){
      humanScore++;
    } else if (result.startsWith('You Lose')){
      computerScore++;
    }
    rndResult.textContent = playRound(playerSelection, computerSelection);
    score.textContent = `Your score ${humanScore} vs Computer score ${computerScore}`;
  }

  if(humanScore == 5 || computerScore == 5){
    if (humanScore > computerScore){
      gameWinner.textContent = 'You win Congratulations!';
    } else {
      gameWinner.textContent = 'You Lose, Try again later.';
    }
    // humanScore = 0;
    // computerScore = 0;
  }

});

function getComputerChoice() {
  let a = Math.floor(Math.random() * 3);
  return (a === 1)? 'rock'
	:(a === 2)? 'paper'
	:'scissors';
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