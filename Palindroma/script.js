// Palidroma

// Chiedere all’utente di inserire una parola 
// Creare una funzione per capire se la parola inserita è palindroma


const parola = prompt('Inserisci una parola');
console.log(parola);

function invertiParola(str) {

    if (str !== "") {
        return invertiParola(str.substr(1)) + str.charAt(0);
    } else {
        return "";
    }

} 

console.log(invertiParola(parola));

const parolaInv = invertiParola(parola);

if( parolaInv == parola ){
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma');
}