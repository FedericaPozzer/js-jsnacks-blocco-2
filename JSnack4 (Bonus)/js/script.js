// console.log("Hello Kikka");

// JSnack4(Bonus)
// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

const lista_breve = [1, 2, 3, 4, 5];
const lista_lunga = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; lista_breve.length < lista_lunga.length; i++) {
    // lista_breve.push(lista_breve[i]); non mi piace, riprovo:
    lista_breve.push(lista_breve.length + 1);
}

console.log("lista breve: " + lista_breve);
console.log("lista lunga: " + lista_lunga);

// così sto dando per scontato che la prima lista è più breve! Era meglio creare un if in cui si controlla la lunghezza della lista e in base a quello una diventa "lunga" e l'altra "corta"! 