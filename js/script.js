/*
 Descrizione:
    Visualizzare in pagina 5 numeri casuali  diversi tra loro. 
    Da lì parte un timer di 30 secondi.
    Dopo 30 secondi l'utente deve inserire, uno alla volta, i 
    numeri che ha visto precedentemente, tramite i prompt().
    Dopo che sono stati inseriti i 5 numeri, il software dice 
    quanti e quali dei numeri da indovinare sono stati individuati.
 Esecuzione:
    1- Creo un randomizer attraverso un function
    2- Faccio partire i trenta secondi
    3- Inserisco dei prompt per chiedere dei numeri all'user
*/

// funzioni
function getRandomnumber() {
   
    while ( numberToMemorize.length < 5 ){
        let randomic= Math.floor(Math.random()* max -min) +min; 
        if (!numberToMemorize.includes(randomic)) {  //controllo se la bomba non è presente nell'array
            numberToMemorize.push(randomic);         // se NON è nella lista allora pusha.
        } 
    return
}

// mi porto gli elementi dal DOM
const remainingSeconds = document.getElementById('remaing');
let randomNumber = document.getElementById('random-number');
const start = document.getElementById('start');

// array di appoggio
const numberToMemorize= [];
console.log(numberToMemorize)

// far partire il timer 
start.addEventListener ('click', function() {
// numeri random
 getRandomnumber(min=0, max=30)
// partiamo da 30
    const second = 30;
    randomNumber.innerText = second;
// decremento
   setInterval(() => {
    randomNumber.innerText = --second;
   }, 30000)

})