`use strict`

// definisco una variabile per un array(arrayA) 
const arrayA = [1, 2, `elemento3`, 4, 5];

// definisco una variabile per un elemento(elementoE) 
const elementoE = 0;
// definisco una variabile per un array(arrayB) e unire il elemento e il array
const arrayB = inserisciInTesta(arrayA, elementoE)
 console.log(arrayB);

// imposto una function
function inserisciInTesta(array, element) {
    // Creo una copia dell'array originale per non modificarlo direttamente
    const newArray = [...array]; 
    // Inserisco l'elemento all'inizio del nuovo array
    newArray.unshift(element); 
    return newArray;
}
