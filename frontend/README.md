# Eventify

## Development server

Per avviare il server di sviluppo, eseguire:

```bash
ng serve
```

o

```bash
npm run start --open
```

## Building

Per buildare il progetto, eseguire:

```bash
ng build
```

Permetterrà di compilare il progetto e memorizzare gli artefatti di build nella directory `dist/`. Di default, la build di produzione ottimizza l'applicazione per le prestazioni e la velocità.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## 🎯 Tema del Progetto: Eventify

Eventify è un'applicazione web che consente agli utenti di:

- Visualizzare un catalogo di eventi disponibili.
- Prenotare un posto a un evento.
- Gestire le prenotazioni effettuate.
- Amministrare nuovi eventi (per utenti con privilegi).
  L’app sarà divisa in una parte pubblica per la visualizzazione degli eventi e una parte amministrativa per la gestione dei contenuti.

## 🗂️ Struttura del Progetto

### Pagine Principali

- Home Page
  - Descrizione dell’applicazione e vetrina con gli eventi più recenti.
  - Ricerca e filtraggio degli eventi.
  - Lista Eventi
  - Visualizzazione di una lista di eventi con anteprime.
  - Filtri per categoria, data e luogo.
- Dettaglio Evento
  - Dettagli completi dell'evento selezionato (data, luogo, descrizione, disponibilità).
  - Pulsante per prenotare un evento.
- Area Utente
  - Login e Registrazione per utenti.
  - Gestione delle prenotazioni effettuate (visualizzare, modificare, cancellare).
- Dashboard Amministrativa
  - Accessibile solo agli utenti con ruolo di amministratore.
  - Funzionalità per aggiungere, modificare e cancellare eventi.
- Pagina di Contatto
  - Modulo per inviare richieste di supporto o informazioni.
- Pagina 404
  - Messaggio di errore per percorsi non esistenti.

## ⚙️ Funzionalità

1. Autenticazione e Autorizzazione
   Login/Logout e Registrazione Utente con autenticazione tramite token JWT.
   Protezione delle rotte con guardie (AuthGuard).
   Ruoli: Utente e Amministratore.
2. Gestione Eventi
   Visualizzazione dinamica degli eventi tramite servizi HTTP.
   Filtraggio e ordinamento degli eventi.
   Visualizzazione dettagliata di ciascun evento con immagini, descrizione e mappa del luogo.
3. Prenotazioni
   Funzionalità per prenotare eventi.
   Visualizzazione delle prenotazioni effettuate.
   Annullamento e modifica delle prenotazioni.
4. Dashboard Amministrativa
   CRUD (Create, Read, Update, Delete) completo per eventi.
   Validazione dei form con Reactive Forms.
   Gestione dei permessi per l'accesso alla dashboard.
5. Ricerca e Filtri
   Ricerca per nome, data, categoria e luogo.
   Filtri con aggiornamento dinamico dei risultati.
6. Notifiche e Feedback
   Toast notifications per confermare azioni come prenotazioni o modifiche.
   Messaggi di errore per operazioni non riuscite.
7. Modulo di Contatto
   Invio di richieste tramite form con validazione.
   Simulazione di una chiamata HTTP a un endpoint fittizio.

## 🛠️ Tecnologie Utilizzate

- Angular per il frontend.
- Angular Router per la gestione della navigazione.
- RxJS per la gestione delle richieste asincrone.
- Tailwind e DaisyUI per il design.
- HTTP Client per comunicare con le API REST.
- JSON Server (per simulare un backend se non è disponibile un’API vera e propria).

## 📂 Struttura dei Componenti

```
src/
│-- app/
│ ├── home/
│ │ └── home.component.ts
│ │ └── home.component.html
│ │
│ ├── events/
│ │ ├── event-list/
│ │ │ └── event-list.component.ts
│ │ │ └── event-list.component.html
│ │ └── event-detail/
│ │ └── event-detail.component.ts
│ │ └── event-detail.component.html
│ │
│ ├── auth/
│ │ ├── login/
│ │ │ └── login.component.ts
│ │ │ └── login.component.html
│ │ └── register/
│ │ └── register.component.ts
│ │ └── register.component.html
│ │
│ ├── admin/
│ │ └── admin-dashboard/
│ │ └── admin-dashboard.component.ts
│ │ └── admin-dashboard.component.html
│ │
│ └── services/
│ └── event.service.ts
│ └── auth.service.ts
│
└── assets/
└── images/
```

## 📝 Passaggi per lo Sviluppo

- Impostare il progetto Angular con ng new Eventify.
- Creare i componenti principali (Home, Event List, Event Detail, Login, ecc.).
- Configurare il routing per le varie pagine.
- Implementare i servizi per la gestione degli eventi e dell’autenticazione.
- Aggiungere la dashboard amministrativa e proteggere le rotte con AuthGuard.
- Integrare TailwindCSS e DaisyUI per un design moderno.
- Collegare il backend
- Testare l’applicazione per verificare che tutte le funzionalità siano operative.
