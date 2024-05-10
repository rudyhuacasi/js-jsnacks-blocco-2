`use strict`

// definisco due variabile input e inputLength
const input = [1, 2, `undidined`, 4]
const inputLength = input.length;

//impostare function
function contaElementi() {
    
    return `Il numero di elementi presenti è ${inputLength}`;
}

// definisco una variabile per la  function
const conta = contaElementi()
// stampo la function
console.log(conta);




//impostare function
function shuffleArray(input) {

    // aggiungo un ciclo per posizionare di modo casuale gli elementi di array
    for (let i = inputLength - 1; i > 0; i--) {

        // Genera un indice casuale compreso tra 0 e i
        const j = Math.floor(Math.random() * (i + 1)); 

        // Scambia gli elementi nelle posizioni i e j
        [input[i], input[j]] = [input[j], input[i]]; 
    }
    return `Il numero di elementi presenti è ${input}`;
}

const shuffle = shuffleArray(input)
console.log(shuffle);
