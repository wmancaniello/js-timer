/**
 * Descrizione: Funzione per aggiornare il timer, stampando i numeri in pagina
 * @returns {any}
 */
function update() {
  // Stampa
  document.getElementById("timer").innerText = `${minutes}:${seconds}`;
}

/**
 * Descrizione: Funzione per avviare il timer, START
 */
function start() {
  // Stampo in console il comando
  console.log("START");
  timer = setInterval(function () {
    // Incremento i secondi di 1 ogni secondo
    seconds++;
    // Stampo i secondi in console
    console.log(`Secondi: ${seconds}`);
    // Condizione per resettare i secondi a 0 e incrementare il minuto

    // Se i secondi raggiungono 60
    if (seconds === 60) {
      // Reset secondi a 0
      seconds = 0;
      // Incremento i minuti di 1
      minutes++;
      // Stampo i minuti in console
      console.log(`Minuti: ${minutes}`);
    }
    // Richiamo la funzione per aggiornare il timer
    update();
    // 1000ms = 1s
  }, 1000);
}

/**
 * Descrizione: Funzione per fermare il timer, STOP
 */
function stop() {
  // Stampo in console il comando
  console.log("STOP");
  clearInterval(timer);
}

/**
 * Descrizione: Funzione per resettare il timer, RESET
 */
function reset() {
  // Stampo in console il comando
  console.log("RESET");
  clearInterval(timer);
  // Reset secondi a 0
  seconds = 0;
  // Reset minuti a 0
  minutes = 0;
  // Richiamo la funzione per aggiornare il display
  update();
}
