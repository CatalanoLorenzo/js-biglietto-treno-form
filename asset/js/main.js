/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */



//chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
const sendEl = document.getElementById("send")
const resetEl = document.getElementById("reset")

sendEl.addEventListener('click', function () {
    console.log("cliccato");
    document.getElementById("cardTicket").className = 'col d-block p-4 text-black'
    const userNameValue = document.getElementById("userName").value
    const kilometersToGoValue = Number(document.getElementById("kilometersToGo").value)
    const userAgeValue = (document.getElementById("userAge").value)
    console.log (`kilometers ${kilometersToGoValue} age of user ${userAgeValue} name od user ${userNameValue}`);
    const costForKm = 0.21;
    console.log(`Cost for km ${costForKm}`);
    
    //il prezzo del biglietto è definito in base ai km (0.21 € al km)
    const costTot = costForKm * kilometersToGoValue;
    console.log(`Cost km travel ${costTot}`);
    
    //va applicato uno sconto del 20% per i minorenni
    let costTotWhitSald;
    costTotWhitSald = costTot;
    const saldMinors = 20;
    const saldOver = 40;
    let typeOfSald = "Standard"
    if (userAgeValue == 'Minorenne') {
        typeOfSald = "Ridotto"
        costTotWhitSald = costTot - ((costTot * saldMinors) / 100);
        console.log(`age user ${userAgeValue} type of ticket ${typeOfSald}`)
    
        //va applicato uno sconto del 40% per gli over 65.
    } else if (userAgeValue == 'Over60') {
        typeOfSald = "Ridotto"
        costTotWhitSald = costTot - ((costTot * saldOver) / 100);
        console.log(`age user ${userAgeValue} type of ticket ${typeOfSald}`)
    } else if (userAgeValue == 'Maggiorenne'){
        console.log(`age user ${userAgeValue} type of ticket ${typeOfSald}`)
    }
    
    //L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo)
    costTotWhitSald = costTotWhitSald.toFixed(2);
    let costo = document.getElementById("costo_display");
    let passegerName = document.getElementById("userName_display")
    let ticketType = document.getElementById ("typeSald")
    let numberWagon = document.getElementById("numberWagon")
    console.log(`cost with applicaed sald ${costTotWhitSald}`);
    costo.innerHTML = costTotWhitSald;
    passegerName.innerHTML = userNameValue
    ticketType.innerHTML = typeOfSald
    numberWagon.innerHTML = Math.floor((Math.random()*10) + 1)
    codeCP.innerHTML = Math.floor((Math.random()*1000) + 1)
})
reset.addEventListener('click', function () {
    document.getElementById("userName").value = ""
    document.getElementById("kilometersToGo").value = ""
})

//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio
