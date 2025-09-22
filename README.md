
# 🔢 Convertitore di Numeri tra Basi

Questo progetto è una semplice applicazione web che permette di convertire un numero da **qualsiasi base (2–36)** a **qualsiasi altra base (2–36)**.

## 🚀 Funzionalità
- Inserisci un numero in una base a scelta.
- Specifica la base di partenza (es. binario = 2, decimale = 10, esadecimale = 16).
- Specifica la base di destinazione.
- Premi **Converti** per ottenere il risultato.

## 🧮 Algoritmo
1. Si prende il numero in input e lo si converte in decimale con `parseInt(numero, baseDa)`.
2. Una volta ottenuto il valore decimale, lo si riconverte nella base desiderata con `valoreDecimale.toString(baseA)`.
3. Il risultato viene mostrato all’utente.

Questo approccio sfrutta il fatto che in JavaScript:
- `parseInt("FF", 16)` → `255`
- `255.toString(2)` → `"11111111"`

## 📦 Come usare
1. Clona il repository:
   ```bash
   git clone https://github.com/icslucas/convertitore.git
   cd base-converter
