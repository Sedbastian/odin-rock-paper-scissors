function computerPlay() {
    let Play;
    switch(Math.floor(Math.random() * 3 + 1)) {
        case 1:
            Play = "piedra";
            break;
        case 2:
            Play = "papel";
            break;
        case 3:
            Play = "tijera";
            break;
    }
    return Play;
}

function singleRound(playerSelection, computerSelection) {

    let playerSelectionLowerCase = playerSelection.toLowerCase();
    let computerSelectionLowerCase = computerSelection.toLowerCase();

    if (playerSelectionLowerCase === "piedra" && computerSelectionLowerCase === "piedra") {
        console.log("Empate");
        return 0;
    }
    if (playerSelectionLowerCase === "piedra" && computerSelectionLowerCase === "papel") {
        console.log("Perdiste esta vuelta");
        return -1;
    }
    if (playerSelectionLowerCase === "piedra" && computerSelectionLowerCase === "tijera") {
        console.log("Ganaste esta vuelta");
        return 1;
    }
    if (playerSelectionLowerCase === "papel" && computerSelectionLowerCase === "piedra") {
        console.log("Ganaste esta vuelta");
        return 1;
    }
    if (playerSelectionLowerCase === "papel" && computerSelectionLowerCase === "papel") {
        console.log("Empate");
        return 0;
    }
    if (playerSelectionLowerCase === "papel" && computerSelectionLowerCase === "tijera") {
        console.log("Perdiste esta vuelta");
        return -1;
    }
    if (playerSelectionLowerCase === "tijera" && computerSelectionLowerCase === "piedra") {
        console.log("Perdiste esta vuelta");
        return -1;
    }
    if (playerSelectionLowerCase === "tijera" && computerSelectionLowerCase === "papel") {
        console.log("Ganaste esta vuelta");
        return 1;
    }
    if (playerSelectionLowerCase === "tijera" && computerSelectionLowerCase === "tijera") {
        console.log("Empate");
        return 0;
    }
}

function game() {
    let score = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Piedra, papel o tijera:");
        console.log(`Vuelta ${i+1}:`);
        let computerMove = computerPlay();
        console.log(`La compu juega: ${computerMove}`);
        score = score + singleRound(playerChoice, computerMove);
        console.log(`Tus puntos de la partida: ${score}`);
    }
    if (score < 0) {
        console.log("Perdiste la partida");
    }
    if (score === 0) {
        console.log("Partida empatada");
    }
    if (score > 0) {
        console.log("Ganaste la partida");
    }
}

game();