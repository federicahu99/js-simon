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
        let randomic = 0;
        randomic= Math.floor(Math.random()* max +1 - min) + min; 
        
        if (!numberToMemorize.includes(randomic)) {  //controllo se la bomba non è presente nell'array
            numberToMemorize.push(randomic);         // se NON è nella lista allora pusha.
        } 
    }
}
// array di appoggio
const numberToMemorize= [];
console.log(numberToMemorize);

// mi porto gli elementi dal DOM
let remainingSeconds = document.getElementById('remaining-sec');
let randomNumber = document.getElementById('random-number');
const start = document.getElementById('start');


// far partire il timer 
start.addEventListener ('click', function() {
   
// numeri random
    getRandomnumber(min=0, max=100);
//porto in DOM
    randomNumber.innerText = numberToMemorize

// partiamo da 30
    let second = 30;
    remainingSeconds.innerText = second;

// decremento
    setInterval(() => {
    remainingSeconds.innerText = --second;
   }, 1000)
   setTimeout(() => {
    remainingSeconds.innerText = 0;
    randomNumber.classList.add('d-none')
   }, 30000)

   // fermo il countdown
    
    setInterval (() => {
    if (remainingSeconds=0) {clearInterval(setTimeout)};
    }, 30000);


    const userAnswer= [];

    setTimeout(() => {
        for (i= 1; i = numberToMemorize.length; i++ ) {
            const answers= parseInt(prompt('scrivi i numeri uno alla volta:'))
            userAnswer.push(answers);
        }
       }, 31000)

       
       //verifica di vittoria
       
       if(userAnswer == numberToMemorize) {
           console.log('Hai perso');
       } else {
           console.log('Hai vinto')
       }
})






