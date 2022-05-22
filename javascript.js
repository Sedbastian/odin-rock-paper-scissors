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
        
    };

    if (playerSelectionLowerCase === "piedra" && computerSelection === "papel") {
        resultadoVuelta = "Perdiste esta vuelta"
        console.log(resultadoVuelta);
        puntajeCompu++;
    };

    if (playerSelectionLowerCase === "piedra" && computerSelection === "tijera") {
        resultadoVuelta = "Ganaste esta vuelta";
        console.log(resultadoVuelta);
        puntajePersona++;
    };

    if (playerSelectionLowerCase === "papel" && computerSelection === "piedra") {
        resultadoVuelta = "Ganaste esta vuelta";
        console.log(resultadoVuelta);
        puntajePersona++;
    };

    if (playerSelectionLowerCase === "papel" && computerSelection === "papel") {
        resultadoVuelta = "Empate";
        console.log(resultadoVuelta);
    };

    if (playerSelectionLowerCase === "papel" && computerSelection === "tijera") {
        resultadoVuelta = "Perdiste esta vuelta"
        console.log(resultadoVuelta);
        puntajeCompu++;
    };

    if (playerSelectionLowerCase === "tijera" && computerSelection === "piedra") {
        resultadoVuelta = "Perdiste esta vuelta"
        console.log(resultadoVuelta);
        puntajeCompu++;
    };

    if (playerSelectionLowerCase === "tijera" && computerSelection === "papel") {
        resultadoVuelta = "Ganaste esta vuelta";
        console.log(resultadoVuelta);
        puntajePersona++;
    };

    if (playerSelectionLowerCase === "tijera" && computerSelection === "tijera") {
        resultadoVuelta = "Empate";
        console.log(resultadoVuelta);
    };

    computerSelection = computerSelection.toUpperCase();
    const resultadoDiv = document.querySelector("#resultados");
    resultadoDiv.textContent = `Vuelta número ${numeroVuelta}: La compu juega ${computerSelection}, ${resultadoVuelta}`;
    const puntajesDiv = document.querySelector("#puntajes");
    puntajesDiv.textContent = `Tu puntaje: ${puntajePersona}. Puntaje Compu: ${puntajeCompu}.`;
        
    if (puntajePersona === 5) {
        const ganasteDiv = document.createElement("div");
        puntajesDiv.textContent = `¡¡¡Ganaste!!! ${puntajePersona} a ${puntajeCompu}`;
        puntajePersona = 0;
        puntajeCompu = 0;
    }

    if (puntajeCompu === 5) {
        
        const perdisteDiv = document.createElement("div");
        puntajesDiv.textContent = `¡¡¡Perdiste!!! ${puntajePersona} a ${puntajeCompu}`;
        puntajePersona = 0;
        puntajeCompu = 0;
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

let puntajePersona = 0;
let puntajeCompu = 0;
let numeroVuelta = 0;

const resultados = document.querySelector("#resultados");

const piedra = document.querySelector("#piedra");
piedra.addEventListener("click", juegaPiedra);

const papel = document.querySelector("#papel");
papel.addEventListener("click", juegaPapel);

const tijera = document.querySelector("#tijera");
tijera.addEventListener("click", juegaTijera);