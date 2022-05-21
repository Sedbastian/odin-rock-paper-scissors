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

function playRound(playerSelection) {

    let computerSelection = computerPlay();
    let playerSelectionLowerCase = playerSelection.toLowerCase();
    numeroVuelta++;
    let resultadoVuelta;

    if (playerSelectionLowerCase === "piedra" && computerSelection === "piedra") {
        resultadoVuelta = "Empate";
        console.log(resultadoVuelta);
        puntaje = puntaje + 0;
    };

    if (playerSelectionLowerCase === "piedra" && computerSelection === "papel") {
        resultadoVuelta = "Perdiste esta vuelta"
        console.log(resultadoVuelta);
        puntaje = puntaje - 1;
    };

    if (playerSelectionLowerCase === "piedra" && computerSelection === "tijera") {
        resultadoVuelta = "Ganaste esta vuelta";
        console.log(resultadoVuelta);
        puntaje = puntaje + 1;
    };

    if (playerSelectionLowerCase === "papel" && computerSelection === "piedra") {
        resultadoVuelta = "Ganaste esta vuelta";
        console.log(resultadoVuelta);
        puntaje = puntaje + 1;
    };

    if (playerSelectionLowerCase === "papel" && computerSelection === "papel") {
        resultadoVuelta = "Empate";
        console.log(resultadoVuelta);
        puntaje = puntaje + 0;
    };

    if (playerSelectionLowerCase === "papel" && computerSelection === "tijera") {
        resultadoVuelta = "Perdiste esta vuelta"
        console.log(resultadoVuelta);
        puntaje = puntaje - 1;
    };

    if (playerSelectionLowerCase === "tijera" && computerSelection === "piedra") {
        resultadoVuelta = "Perdiste esta vuelta"
        console.log(resultadoVuelta);
        puntaje = puntaje - 1;
    };

    if (playerSelectionLowerCase === "tijera" && computerSelection === "papel") {
        resultadoVuelta = "Ganaste esta vuelta";
        console.log(resultadoVuelta);
        puntaje = puntaje + 1;
    };

    if (playerSelectionLowerCase === "tijera" && computerSelection === "tijera") {
        resultadoVuelta = "Empate";
        console.log(resultadoVuelta);
        puntaje = puntaje + 0;
    };

    computerSelection = computerSelection.toUpperCase();
    const resultadoDiv = document.createElement("div");
    resultadoDiv.textContent = `Vuelta número ${numeroVuelta}: La compu juega ${computerSelection}, ${resultadoVuelta}`;
    resultados.appendChild(resultadoDiv);
    const puntajeDiv = document.createElement("div");
    puntajeDiv.textContent = `Tu puntaje: ${puntaje}`;
    resultados.appendChild(puntajeDiv);
    
    if (puntaje === 5) {
        puntaje = 0;
        const ganasteDiv = document.createElement("div");
        ganasteDiv.textContent = "¡¡¡Ganaste!!!";
        resultados.appendChild(ganasteDiv);
    }

    if (puntaje === -5) {
        puntaje = 0;
        const perdisteDiv = document.createElement("div");
        perdisteDiv.textContent = "¡¡¡Perdiste!!!";
        resultados.appendChild(perdisteDiv);
    }
};

function juegaPiedra() {
    playRound("piedra");
};

function juegaPapel() {
    playRound("papel");
};

function juegaTijera() {
    playRound("tijera");
};

let puntaje = 0;
let numeroVuelta = 0;

const resultados = document.querySelector("#resultados");

const piedra = document.querySelector("#piedra");
piedra.addEventListener("click", juegaPiedra);

const papel = document.querySelector("#papel");
papel.addEventListener("click", juegaPapel);

const tijera = document.querySelector("#tijera");
tijera.addEventListener("click", juegaTijera);