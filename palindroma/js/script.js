// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// creo una variabile con la parola iserita dall'utente tramite prompt
const parolaUtente = prompt("Inserisci una parola");
console.log(parolaUtente);









// prove verifica parola palindroma

// parola random inserita dell'utente
const miaParola = "magnifico";
console.log(miaParola);

// divido la parola inserita dall'utente in un array con di caratteri
const miaParolaScomposta = miaParola.split("");
console.log(miaParola, miaParolaScomposta);

// dispongo i caratteri dell'array al contrario
const miaParolaScompostaReverse = miaParolaScomposta.reverse();
console.log(miaParolaScompostaReverse);

// ricompongo la parola scritta al contrario
const miaParolaReverse = miaParolaScompostaReverse.join("");
console.log(miaParolaReverse);