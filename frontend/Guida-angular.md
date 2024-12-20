# Guida Angular sul progetto

## 🔨 Configurazione environment

Per configurare l'environment tramite ng-cli, è possibile utilizzare il comando:

```bash

ng generate environments

```

Per richiamare le variabili di environments all'interno dei files basterà utilizzare:

```typescript
import { environment } from "src/environments/environment";
```

## 🚦 Decorators Model, Input, Output

- Con l'input decorator è possibile passare dati da un componente padre a un componente figlio.
- Con l'output decorator è possibile passare dati da un componente figlio a un componente padre.
- Con il model decorator è possibile passare dati da un componente a un altro componente in modo bidirezionale.

  > Vedere la componente grid-switcher e la pagina event-list per un esempio di utilizzo.

## 🚗 Routing

Con il nuovo angular non è più necessaria una logica a moduli, viene dunque creato un file che gestisce le diverse routes dell'applicazione.

> Vedere il file app-routes.ts per un esempio di utilizzo.

Per caricare in modo lazy le routes è possibile usare il loadComponent, mentre per quanto riguarda la gestione dei children, si dovrà utilizzare nel parent il tag router-outlet e richiamare il RouterModule dentro lo stesso. <br/>
Mentre per richiamare i children, all'interno del file app-routes.ts, si dovrà definire l'array children e richiamare le varie componenti figlie definendo il path ed il component di riferimento.

## 🌎 HttpClient

In Angular 18 non è più necessario richiamare l'HttpClientModule in app.module.ts, in quanto viene già richiamato automaticamente.<br/>
Per utilizzare HttpClient basterà chiamare il provider in app.config.ts e iniettarlo dentro il servizio in cui deve essere utilizzato.

> Vedere il file api.service.ts ed il file app.config.ts per un esempio di utilizzo.

## Interceptor

## Guardians

## Services

## Directives

## Forms

## Differenza tra RXJS e NGRX

Rxjs gives you Observables. Ngrx gives you state management with actions and reducers.
Rxjs fornisce degli Observables da utilizzare per la gestione degli eventi, mentre Ngrx fornisce state management tramite uno store con azioni e reducers.

### 📚 Le Pipes in RXJS

In Angular, pipe è un metodo utilizzato con gli Observable per trasformare i dati emessi da un Observable, applicando una serie di operatori. Gli operatori sono funzioni che permettono di manipolare il flusso di dati: ad esempio, puoi filtrare, trasformare o combinare gli elementi emessi dall'Observable.

```typescript
myObservable.pipe(
  map((value) => value * 2), // Trasforma ogni valore moltiplicandolo per 2
  filter((value) => value > 5) // Filtra solo i valori maggiori di 5
);
```

> Prendere in considerazione event-list.component.ts per un esempio di utilizzo.

### 🔄 SwitchMap - RxJS

`switchMap` è uno degli operatori più potenti che puoi usare con un Observable. Serve per sostituire un Observable con un nuovo Observable basato sui valori emessi dal primo.

In pratica, prende ogni valore emesso dall'Observable originale e lo "scambia" con un nuovo Observable. Se arriva un nuovo valore prima che il precedente Observable abbia completato, il precedente viene annullato (cancellato) e il nuovo prende il suo posto.

> Prendere in considerazione event-list.component.ts per un esempio di utilizzo.

#### 📝 Schema di switchMap

```
Observable ----x----x----x--------->

switchMap(value => Observable2)

Result ---------o----o----o--------->
```

> Dove `x` sono i valori emessi da Observable1 e `o` sono i valori emessi da Observable2.

Nel caso presentato in event-list.component.ts si usa switchMap perchè se categories dovesse rispondere dopo events, una volta che categories risponde, la risposta di events verrebbe sovrascritta da categories prendendo come base i vecchi dati ottenuti tramite la chiamata events.

### 📚 BehaviousSubject - RxJS
