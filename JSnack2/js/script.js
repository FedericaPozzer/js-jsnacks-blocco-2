// console.log("Hello Kikka");

// JSnack2
// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde.Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.


document.getElementById("rosso-dispari").style.color = "red";
document.getElementById("verde-pari").style.color = "green";

const array = [];
const random_number = Math.floor(Math.random() * 10) + 1;
// console.log(random_number);

for (let i = 0; i < random_number; i++) {
    let numbers = Math.floor(Math.random() * 50) + 1;
    array.push(numbers);

    // let numeri_dispari = (numbers % 2 == 0);
    // console.log(numeri_dispari);
    
    // if (numbers % 2) {
    //     console.log(numbers);
    // }

}

console.log(array); 
