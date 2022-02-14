// Pari e Dispari

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
// Generiamo un numero random (sempre da 1 a 5) per il computer 
// (usando una funzione)
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari 
// (usando una funzione) 
// Dichiariamo chi ha vinto.


let numUser;

const pariDispari = prompt('Pari o dispari?');

console.log(pariDispari);

while ( isNaN(numUser) ) {

    numUser = parseInt( prompt('Inserisci un numero da 1 a 5') );

}

console.log(numUser);

let pari = false;

function getRandomIntInclusive(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);

}

const numPc = getRandomIntInclusive(1,5);
console.log(numPc);

function sum (num1, num2) {

    somma = num1 + num2;

    if ( somma % 2 == 1) {
        pari = false;
    } else {
        pari = true;
    }

    return somma;

}

const totNum = sum(numUser, numPc);
console.log(totNum);

if ( pari == true && pariDispari =='pari') {
    console.log('Hai vinto!');
} else if (pari == true && pariDispari =='dispari') {
    console.log('Hai perso');
} else if (pari == false && pariDispari =='dispari') {
    console.log ('Hai vinto!');
} else if (pari == false && pariDispari =='pari'){
    console.log('Hai perso');
}