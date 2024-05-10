`use strict`

// definisco un variabile per un array(arrayA)
const arrayA = [0, 1, 2, `elemento3`, 4, 5];

// definisco un variabile per una function rimuoviDallaCoda(arrayA);
const arrayB = rimuoviDallaCoda(arrayA)

// stampo il arrayB con tutti gli elementi dell'arrayA tranne quello in prima posizione
console.log(arrayB);

// impostare una function 
function rimuoviDallaCoda(array) {
    
    return array.slice(1);
}