/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */



//chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
const sendEl = document.getElementById("send")
let kilometersToGoValue = document.getElementById("kilometersToGo")
let userAgeValue = document.getElementById("userAge")
sendEl.addEventListener('click', function () {
    kilometersToGoEl = document.getElementById("kilometersToGo").value
    userAgeEl = document.getElementById("userAge").value
})

console.log(kilometersToGoValue, userAgeValue);

//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio
const costForKm = 0.21;
console.log(costForKm);

//il prezzo del biglietto è definito in base ai km (0.21 € al km)
const costTot = costForKm * kilometersToGoValue;
console.log(costTot);

//va applicato uno sconto del 20% per i minorenni
let costTotWhitSald;
costTotWhitSald = costTot;
const saldMinors = 20;
const saldOver = 40;
if (userAgeValue <= 18) {
    costTotWhitSald = costTot - ((costTot * saldMinors) / 100);

    //va applicato uno sconto del 40% per gli over 65.
} else if (userAgeValue >= 65) {
    costTotWhitSald = costTot - ((costTot * saldOver) / 100);
}

//L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo)
costTotWhitSald = costTotWhitSald.toFixed(2);
let costo = document.getElementById("costo_display");
console.log(costTotWhitSald);
costo.innerHTML = costTotWhitSald;
