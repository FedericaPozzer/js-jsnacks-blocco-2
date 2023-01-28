// console.log("Hello Kikka");

// JSnack4(Bonus)
// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

const lista_breve = [1, 2, 3, 4, 5];
const lista_lunga = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (i = 0; lista_breve.length < lista_lunga.length; i++) {
    lista_breve.push(lista_breve[i]);
}

console.log("lista breve: " + lista_breve);
console.log("lista lunga: " + lista_lunga);