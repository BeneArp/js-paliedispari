// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma



// creo una variabile con la parola iserita dall'utente tramite prompt
const parolaUtente = prompt("Inserisci una parola");
console.log(parolaUtente);




// FUNZIONE
// verifica se la parola inserita dall'utente è palindroma
function verificaSePalindroma (parola){
    const parolaInvertita = parola.split("").reverse().join("");

    // // se la parola scritta al contrario è uguale alla parola originale
    // if(parola === parolaInvertita){
    //     // la parola è palindroma
    //     return true;
    // // al contrario se la parola scritta al contrario è diversa dalla parola originale
    // }else{
    //     // la parola non è palindroma
    //     return false;
    // }

    // condizione scritta con ternario
    return parola === parolaInvertita ? true : false;
}



// creo una variabile contenente il risultato della mia funzione
let risultatoVerificaParola = verificaSePalindroma(parolaUtente);
// stampo in console il risualtato della funzione
console.log(risultatoVerificaParola);



// if(risultatoVerificaParola === true){
//     console.log("La tua parola è palindroma");
// }else{
//     console.log("La tua parola non è palindroma");
// }

// condizione output scritta con ternario
const risultato = risultatoVerificaParola === true ? "La tua parola è palindroma" : "La tua parola non è palindroma";
// stampo in console la risposta
console.log(risultato);





// prove verifica parola palindroma

// parola random inserita dell'utente
// const miaParola = "magnifico";
// console.log(miaParola);

// // divido la parola inserita dall'utente in un array con di caratteri
// const miaParolaScomposta = miaParola.split("");
// console.log(miaParola, miaParolaScomposta);

// // dispongo i caratteri dell'array al contrario
// const miaParolaScompostaReverse = miaParolaScomposta.reverse();
// console.log(miaParolaScompostaReverse);

// // ricompongo la parola scritta al contrario
// const miaParolaReverse = miaParolaScompostaReverse.join("");
// console.log(miaParolaReverse);