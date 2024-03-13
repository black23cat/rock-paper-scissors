//Create function that return random number 0-3
//Each random number generated will represent as rock = 0, paper =1 , scissors =2

function getComputerChoice (){
const a = Math.floor(Math.random() * 3);

if (a === 0){
return "rock";
}else if (a === 1){
return "paper";
}else {
return "scissors";
}
}


// create function that determine the winner base on the user and computer choice rock, paper or scissor

function playRound(playerSelection, computerSelection){
    let message;
    if (playerSelection == computerSelection){
    return message = "It's a Tie , Go play another round!";
    }else if (playerSelection === "rock" && computerSelection === "scissors"){
    return message = "You win, Rock beats Scissors";
    }else if (playerSelection === "rock" && computerSelection === "paper"){
    return message = "You lose, Paper beats Rock";
    }else if (playerSelection === "paper" && computerSelection === "scissors"){
    return message = "You lose, Scissors beats Paper";
    }else if (playerSelection === "paper" && computerSelection === "rock"){
    return message = "You win, Paper beats Rock";
    }else if (playerSelection === "scissors" && computerSelection === "paper"){
    return message = "You win, Scissors beats Paper";
    }else if (playerSelection === "scissors" && computerSelection === "rock"){
    return message = "You lose, Scissors beats Paper"
    }
}

// console.log(playRound(playerSelection, computerSelection));


let playerScore = 0;
let computerScore = 0;

// function that run the game 

function playGame(){

//User input values and the computer get random value

    playerSelection = prompt("Rock, Paper or Scissors?").toLocaleLowerCase();
    computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);

//Each time user or computer win will get 1 point

if (result.startsWith("You win")){
    playerScore = playerScore + 1;
}else if (result.startsWith("You lose")){
    computerScore = computerScore + 1;
}
}

playGame();
console.log(playRound(playerSelection, computerSelection));
console.log(`Your score ${playerScore} vs Computer score ${computerScore}`);
playGame();
console.log(playRound(playerSelection, computerSelection));
console.log(`Your score ${playerScore} vs Computer score ${computerScore}`);
playGame();
console.log(playRound(playerSelection, computerSelection));
console.log(`Your score ${playerScore} vs Computer score ${computerScore}`);
playGame();
console.log(playRound(playerSelection, computerSelection));
console.log(`Your score ${playerScore} vs Computer score ${computerScore}`);
playGame();
console.log(playRound(playerSelection, computerSelection));
console.log(`Your score ${playerScore} vs Computer score ${computerScore}`);

//At the end of the round played, the score will be calculated to determine the winner of the game
//if user win it will return message "You win, Congratulations!"
//if user lose it will return message "You lose, Better luck next time!"
//if the user and computer score are the same it will return "It's a tie."

function finalScore(){
    if (playerScore === computerScore){
        return "It's a tie."
    }else if (playerScore > computerScore){
        return "You Win, Congratulations!"
    }else{
        return "You Lose, Better luck next time!"
    }
}
console.log(finalScore());