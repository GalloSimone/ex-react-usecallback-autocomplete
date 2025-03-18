📌 Milestone 1: Creare un campo di ricerca e mostrare la lista dei suggerimenti

Crea un campo di input (<input type="text">) in cui l’utente può digitare.
Effettua una chiamata API a: 
https://boolean-spec-frontend.vercel.app/freetestapi/products?search=[query]
La query deve essere sostituita con il testo digitato.
Mostra i risultati API sotto l'input in una tendina di suggerimenti.
Se l'utente cancella il testo, la tendina scompare.


📌 Milestone 2: Implementare il Debounce per Ottimizzare la Ricerca

Attualmente, ogni pressione di tasto esegue una richiesta API. Questo è inefficiente!
Implementa una funzione di debounce per ritardare la chiamata API fino a quando l’utente smette di digitare per un breve periodo (es. 300ms)
Dopo l’implementazione, verifica che la ricerca non venga eseguita immediatamente a ogni tasto premuto, ma solo dopo una breve pausa.

