// console.log("Hello Kikka");

// JSnack1
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

const user_number = parseInt(prompt("inserisci un numero!"));
// console.log(user_number);

if (user_number % 2) {
    console.log(user_number + 1);
} else {
    console.log(user_number);
}

// if (user_number % 2) funziona perchè la divisione da zero e zero è considerato FALSE 
// ma sarebbe sytato meglio scriverlo con chiarezza, ovvero: 
// if (user_number % 2 == 0) 
// e in questo caso si stampa user_number e non user_number + 1 :)