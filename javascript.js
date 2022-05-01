function computerPlay() {
    let Play;
    switch(Math.floor(Math.random() * 3 + 1)) {
        case 1:
            Play = "Rock";
            break;
        case 2:
            Play = "Paper";
            break;
        case 3:
            Play = "Scissors";
            break;
    }
    return Play;
}

function singleRound(playerSelection, computerSelection) {

    let playerSelectionLowerCase = playerSelection.toLowerCase();
    let computerSelectionLowerCase = computerSelection.toLowerCase();

    if (playerSelectionLowerCase === "rock" && computerSelectionLowerCase === "rock") {
        return "Draw";
    }
    if (playerSelectionLowerCase === "rock" && computerSelectionLowerCase === "paper") {
        return "You lose";
    }
    if (playerSelectionLowerCase === "rock" && computerSelectionLowerCase === "scissors") {
        return "You win";
    }
    if (playerSelectionLowerCase === "paper" && computerSelectionLowerCase === "rock") {
        return "You win";
    }
    if (playerSelectionLowerCase === "paper" && computerSelectionLowerCase === "paper") {
        return "Draw";
    }
    if (playerSelectionLowerCase === "paper" && computerSelectionLowerCase === "scissors") {
        return "You lose";
    }
    if (playerSelectionLowerCase === "scissors" && computerSelectionLowerCase === "rock") {
        return "You lose";
    }
    if (playerSelectionLowerCase === "scissors" && computerSelectionLowerCase === "paper") {
        return "You win";
    }
    if (playerSelectionLowerCase === "scissors" && computerSelectionLowerCase === "scissors") {
        return "Draw";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Your move:");
        console.log(`Round ${i+1}:`);
        let computerMove = computerPlay();
        console.log(`Computer plays ${computerMove}`);
        console.log(singleRound(playerChoice, computerMove));

    }
}

game();