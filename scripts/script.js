const options = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;
let roundResults = ``;
let outcome = ``;
const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const messageParagraph = document.getElementById("message");
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (button.id == "restart-button") {
            gameRestart();
        }
        else {
            if(playerScore >=5 || computerScore >= 5) {
                alert("Wanna play again? Click the restart button!");
            }
            else {
                game(button.id);
            }
        }
    });
});

function gameRestart() {
    playerScore = 0;
    playerScoreSpan.innerHTML = playerScore;
    computerScore = 0;
    computerScoreSpan.innerHTML = computerScore;
    roundNumber = 0;
    roundResults = ``;
    outcome = ``;
    messageParagraph.innerHTML = `Ready to play?`;
}

function computerPlay() {
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
    roundNumber++;
    if ((playerSelection == "Rock" && computerSelection == "Scissors") || 
        (playerSelection == "Scissors" && computerSelection == "Paper") || 
        (playerSelection == "Paper" && computerSelection == "Rock")) {
        playerScore++;
        playerScoreSpan.innerHTML = playerScore;
    }
    else if ((playerSelection == "Scissors" && computerSelection == "Rock") || 
        (playerSelection == "Paper" && computerSelection == "Scissors") || 
        (playerSelection == "Rock" && computerSelection == "Paper")) {
        computerScore++;
        computerScoreSpan.innerHTML = computerScore;
    }
    roundResults = `Round ${ roundNumber } Results: Player: ${ playerSelection } ----- Computer: ${ computerSelection }`;
    messageParagraph.innerHTML = roundResults;
}

function calculateWinner() {
    if (playerScore > computerScore) {
        outcome = `You win! You beat the computer by a score of ${ playerScore } to ${ computerScore }.`;
    }
    else if (playerScore < computerScore) {
        outcome = `You lose.. The computer won by a score of ${ computerScore } to ${ playerScore }.`;
    }
    else {
        outcome = `It\'s a draw!`;
    }
    messageParagraph.innerHTML = outcome;
}

function game(playerSelection) {
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    if(playerScore >= 5 || computerScore >= 5) calculateWinner();
}