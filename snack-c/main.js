`use strict`

// definisco una variabile per il array
const input = [1, 2, `elemento3`, 4, 5];

// stampo la function(stampa())
console.log(stampa());

// impostare una function
function stampa() {
    //stampo per unire tutti gli elementi di array(input) 
    return input.join(`, `);
}

