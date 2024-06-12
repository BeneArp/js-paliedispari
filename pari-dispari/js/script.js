// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// chiedo all'utente di scegliere pari o dispari
const sceltaUtente = prompt("Scegli pari o dispari");
// chiedo un numero all'utente
const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));


// FUNZIONE
// realizza un numero random
function randomNumber (min, max){
    // formula per genereare un numero random con minimo e massimo inclusi
    return Math.floor(Math.random() * (max - min)) + min;
}