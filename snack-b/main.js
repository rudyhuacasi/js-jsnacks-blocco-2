`use strict`

// impostazione function
function trovaIndice(number) {
    //aggiungo un ciclo
    for (let i = 0; i < input.length; i++) {
    
        // aggiungo una condizionale per trovare la posizione del elemento di un array
        if ( input[i] === number ) {
            return (`il elemento se trova in ${i}`);
        }
  } return(`il elemento deve restituire -1`)
    
}   


// definisco una variabile per il array 
const input = [1, 2, `elemento3`, 4, 5];
// stampo la posizione del elemento
console.log(trovaIndice(2));

