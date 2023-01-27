// Dato un array contenente i risultati di una squadra(vittorie, pareggi e sconfitte)[W, W, L, X, X, W, L, X], stampare a video il numero di vittorie, il numero di pareggi ed il numero di sconfitte.

let results = ["W", "W", "L", "X", "X", "W", "L", "X"];

let pareggi = 0;
let vincite = 0;
let sconfitte = 0;

for (i = 0; i < results.length; i++) {
    const finale = results[i];

    if (finale == "W") {
        vincite++;
    } else if (finale == "L") {
        sconfitte++;
    } else {
        pareggi++;
    }
}

// console.log(draws); ok

console.log("Hai vinto " + vincite + " volte, hai perso " + sconfitte + " volte e hai pareggiato " + pareggi + " volte.")