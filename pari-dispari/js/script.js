// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// chiedo all'utente di scegliere pari o dispari
const sceltaUtente = prompt("Scegli pari o dispari");
// chiedo un numero all'utente
const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

console.log(numeroUtente);


// creo una variabile contenente il numero generato dalla funzione
const numeroPc = randomNumber(1, 5);
console.log(numeroPc);

// richiamo la funzione per fare la somma
const numeroSommato = somma(numeroUtente, numeroPc);
console.log(numeroSommato);

// risultato numero pari o dispari
const risultato = pariDispari(numeroSommato);
console.log(risultato);


// condizione per decidere chi vince
// if (sceltaUtente === risultato){
//     console.log("Hai vinto!");
// }else{
//     console.log("Sei scarso!");
// }

// condizione scritta con ternario
const esitoPartita = sceltaUtente === risultato ? "Hai vinto" : "Hai perso!";

console.log(esitoPartita);








// FUNZIONI
// realizza un numero random
function randomNumber (min, max){
    // formula per genereare un numero random con minimo e massimo inclusi
    return Math.floor(Math.random() * (max - min)) + min;
}

// somma
function somma (num1, num2){
    return num1 + num2;
}

// verifica pari o diapri
function pariDispari (num){

    // if (num % 2 === 0){
    //     return "pari"

    // }else{
    //     return "dispari"
    // }

    // condizione scritta con ternario
    return num % 2 === 0 ? "pari" : "dispari"
}