# Gioco del Tris in JavaScript

Questo progetto è un semplice **gioco del Tris (Tic-Tac-Toe)** sviluppato in **HTML, CSS e JavaScript puro**, senza backend.  
L'interazione è gestita tramite eventi DOM e tutte le logiche di gioco sono lato client.

---

## 🎮 Regole del Gioco

- Due giocatori si alternano (X e O) cliccando su una delle 9 celle.
- Vince chi per primo allinea 3 simboli uguali (orizzontale, verticale o diagonale).
- Se tutte le celle sono piene e nessuno ha vinto, è pareggio.
- Il pulsante **Rigioca** resetta il campo e riavvia il gioco.

---

## ⚙️ Logica del Codice

- `turno` e `gioco` gestiscono il turno corrente e lo stato del gioco.
- La funzione `inizioGioco()` crea il campo 3x3, resetta i dati e aggiunge gli event listener.
- `Selezione()` assegna X o O alla cella cliccata e avvia il controllo vittoria o pareggio.
- `vittoriaGioco()` verifica le combinazioni vincenti che coinvolgono la cella cliccata.
- `Pareggio()` controlla se tutte le celle sono piene senza vincitore.
- `winningCombos` contiene tutte le 8 possibili combinazioni vincenti.

---

## 🛠️ Tecnologie Utilizzate

- **JavaScript** per la logica del gioco e l’interazione.
- **HTML/CSS** per l'interfaccia grafica.

---


