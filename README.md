# **TechVibes TODO App – Workshop** 🚀  

Benvenuti nel workshop **TechVibes TODO App**! 🎉 Qui avrete l'opportunità di lavorare su una piccola TODO list, migliorandone le funzionalità attraverso una serie di esercizi mirati a fare esperienza con alcune tecniche per rilasciare codice incompleto, abilità fondamentale per fare Continuous Integration / Trunk-Based Development.

---

## **📌 Contesto: Benvenuti in TechVibes**  

TechVibes è una **startup innovativa** che sta rivoluzionando il modo in cui i team gestiscono le proprie attività quotidiane. Stiamo costruendo una **TODO App** che aiuti le persone a organizzare il lavoro in modo efficace, con un'interfaccia semplice e funzionalità avanzate.  

Siete stati appena assunti nel team di sviluppo e il vostro primo incarico è **migliorare l’app esistente**, che al momento permette solo di **creare e visualizzare** task. La roadmap prevede nuove funzionalità fondamentali: **modifica, eliminazione, gestione dello stato e delle priorità**.  

Il vostro obiettivo è lavorare **seguendo le migliori pratiche** e applicando strategie come **Parallel Change, Feature Flag e Keystone Interface** per rendere il codice scalabile e manutenibile nel tempo.  

---

## **⚖️ Regole del Workshop**  

✅ **Team Mob Programming**

L'esercizio verrà svolto da team di 4 persone utilizzando la pratica del Mob Programming. Potete leggere qualcosa a riguardo [qui](https://www.pluralsight.com/resources/blog/software-development/mob-programming-101), ma in breve questo significa:

- Ogni team avrà a disposizione una breakout room per lavorare insieme.
- A rotazione, ognuno dei membri del team sarà driver, ovvero condividerà lo schermo e gestirà la scrittura del codice
- Tutti gli altri membri del team sono navigators: devono comunicare attivamente e collaborare, tra di loro ed insieme al driver, per implementare quanto richiesto dall'esercizio
- Lo scambio di ruoli avviene tramite timer, seguendo la tecnica del Pomodoro: ogni 25 minuti è obbligatorio cambiare driver
- Lo scambio di ruoli deve obbligatoriamente avvenire tramite push delle modifiche fatte, anche se scegliete di utilizzate tool di scrittura codice collaborativa

✅ **Extreme Trunk-Based Development: no branches, pipeline sempre verde**  

È obbligatorio lavorare direttamente sul branch principale (master), senza aprire branch. Ogni volta che viene richiesto di fare push delle modifiche, questo deve avvenire direttamente su master.

Inoltre, la pipeline di test e deploy dopo il push deve sempre rimanere verde. Se la pipeline dovesse rompersi, fixarla diventa la priorità assoluta del team: non si può procedere con l'esercizio finchè la pipeline non è stata sistemata.

✅ **Push obbligatori!**  

In alcuni step dell'esercizio, riceverete l'indicazione di fare obbligatoriamente push tra una modifica e l'altra - quando il team arriva ad uno step e trova il comando di push obbligatorio, deve per forza fare push (anche se non sono ancora passati i 25 minuti per lo switch).

Il comando è il seguente:

🚨 Push forzato 🚨 Prima di proseguire, devi per forza fare push delle tue modifiche.

✅ **Divertimento e condivisione**  

- Durante il workshop discuteremo le soluzioni e valuteremo insieme le scelte fatte.  
- Siate curiosi e aperti al confronto
- Divertitevi!

---

## **🛠️ Tech Stack e Setup dell’Ambiente di Sviluppo**  

Assicurati di avere installato **Node.js** (consigliata v20) in modo da avere a disposizione **npm**.

### **1️⃣ Installazione**  

```sh
npm install
```

### **2️⃣ Avviare il backend tramite json-server**  

Per prima cosa, ti serve fare setup della cartella di dati: questa cartella sarà il layer di persistenza usando dei file JSON.
Esegui il seguente comando per inizializzare il file JSON della tabella Todos (se non esiste, crea la cartella `data`):

```sh
mkdir data
cp data.json.example data/data.json
```

Ora che hai dei dati disponibili, puoi lanciare il backend tramite json-server:

```sh
npm run json-server
```

### **3️⃣ Avviare l'applicazione**  

```sh
npm run dev
```

L’app sarà disponibile su <http://localhost:3000> 🚀.

### **4️⃣ Eseguire i test**

Per eseguire i test di integrazione, usa il comando: `npm run test`.

Per eseguire i test e2e, usa il comando: `npm run test-e2e` in modalita headless, oppure `npm run test-e2e-ui` per lanciare la UI.
NB: per poter lanciare i test e2e devi avere l'applicazione che gira in locale (quindi devi avere eseguito i due comandi precedenti prima di lanciare i test).

In alternativa, puoi sfruttare lo script di pre-commit di husky che viene eseguito in automatico ad ogni commit; invece di eseguire i test tramite npm,
puoi lanciare lo script bash che si assicura le porte 3000 e 3001 siano libere, lancia l'app, esegue i test e poi libera nuovamente le porte.

Dovresti vedere i test esistenti passare con successo. Man mano che implementerai nuove funzionalità, aggiorna e aggiungi test dove necessario.


```sh
bash .husky/pre-commit
```

---

Ora sei pronto per iniziare il workshop! 🎯 Buon coding e benvenuto in TechVibes! 🚀

---

### 📦 Built With

This repository has been forked by <https://github.com/candraKriswinarto/simple-todoapp-with-next13> and then adapted for the workshop.

- [nextjs 13 docs] <https://beta.nextjs.org/docs>
- [json-server] <https://github.com/typicode/json-server>
- [tailwindcss] <https://tailwindcss.com/docs/guides/nextjs>
- [daisy ui] <https://daisyui.com/components/>
- [react-icons] <https://react-icons.github.io/react-icons/>
- [uuid] <https://github.com/uuidjs/uuid>
