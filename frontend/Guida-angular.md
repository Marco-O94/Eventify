# Guida Angular sul progetto

## Configurazione environment

Per configurare l'environment tramite ng-cli, è possibile utilizzare il comando:

```bash

ng generate environments

```

Per richiamare le variabili di environments all'interno dei files basterà utilizzare:

```typescript
import { environment } from "src/environments/environment";
```

## Decorators Model, Input, Output

- Con l'input decorator è possibile passare dati da un componente padre a un componente figlio.
- Con l'output decorator è possibile passare dati da un componente figlio a un componente padre.
- Con il model decorator è possibile passare dati da un componente a un altro componente in modo bidirezionale.

  > Vedere la componente grid-switcher e la pagina event-list per un esempio di utilizzo.

## Routing

Con il nuovo angular non è più necessaria una logica a moduli, viene dunque creato un file che gestisce le diverse routes dell'applicazione.

> Vedere il file app-routes.ts per un esempio di utilizzo.

Per caricare in modo lazy le routes è possibile usare il loadComponent, mentre per quanto riguarda la gestione dei children, si dovrà utilizzare nel parent il tag router-outlet e richiamare il RouterModule dentro lo stesso. <br/>
Mentre per richiamare i children, all'interno del file app-routes.ts, si dovrà definire l'array children e richiamare le varie componenti figlie definendo il path ed il component di riferimento.

## HttpClient

In Angular 18 non è più necessario richiamare l'HttpClientModule in app.module.ts, in quanto viene già richiamato automaticamente.<br/>
Per utilizzare HttpClient basterà iniettarlo dentro il servizio in cui deve essere utilizzato.

> Vedere il file api.service.ts per un esempio di utilizzo.

## Interceptor

## Guardians

## Services

## Pipes

## Directives

## Forms
