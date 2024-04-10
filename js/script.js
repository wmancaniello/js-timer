//  Variabili globali Iniziali
let timer = "";
let seconds = 0;
let minutes = 0;



// Assegno l'event listener ai pulsanti e di conseguenza la function relativa


// Avvio il timer con il pulsante START
document.getElementById("start").addEventListener("click", start);

// Fermo il timer con il pulsante STOP
document.getElementById("stop").addEventListener("click", stop);

// Reset del timer con il pulsante RESET
document.getElementById("reset").addEventListener("click", reset);
