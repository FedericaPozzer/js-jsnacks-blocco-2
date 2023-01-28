// console.log("Hello Kikka");

// JSnack2
// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.


document.getElementById("rosso-dispari").style.color = "red";
document.getElementById("verde-pari").style.color = "green";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // console.log(numbers);

const pari_list = [];
const dispari_list = [];

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 == 0) {
        let numeri_pari = numbers[i];
            // console.log(numeri_pari);

        pari_list.push(numeri_pari);
    } else {
        let numeri_dispari = numbers[i];
            // console.log(numbers[i]);
        
        dispari_list.push(numeri_dispari);
    }

    // console.log(pari_list);
    // console.log(dispari_list);
}

document.getElementById("verde-pari").innerHTML = pari_list;
document.getElementById("rosso-dispari").innerHTML = dispari_list;

