`use strict`
/*
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.*/

const primiNumeri = [2,3,4.5]
const secondiNumeri =[1]
let number = 0
while (number < primiNumeri.length) {
    const random = Math.floor(Math.random()*100)
    secondiNumeri.push(random);
    number++
}
console.log(secondiNumeri);