// Funzione per convertire un numero da una base a un'altra
function converti() {
  // Recupera i valori dagli input
  const numero = document.getElementById("numero").value.trim();
  const baseDa = parseInt(document.getElementById("baseDa").value);
  const baseA = parseInt(document.getElementById("baseA").value);
  const output = document.getElementById("risultato");

  try {
    // Algoritmo di conversione:
    // 1. Usiamo parseInt(numero, baseDa) per ottenere il valore decimale.
    //    Questo ci permette di tradurre il numero da qualsiasi base (2–36) a base 10.
    const valoreDecimale = parseInt(numero, baseDa);

    if (isNaN(valoreDecimale)) {
      output.textContent = "Errore: numero non valido per la base di partenza.";
      return;
    }

    // 2. Usiamo .toString(baseA) per convertire dal decimale alla base di destinazione.
    const risultato = valoreDecimale.toString(baseA).toUpperCase();

    // Mostriamo il risultato
    output.textContent = risultato;
  } catch (e) {
    output.textContent = "Errore di conversione: " + e.message;
  }
}
