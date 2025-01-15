import { Component, input, model } from '@angular/core';
import { Category, Event, EventsFilters } from '../../../../interfaces';
import { EventCardComponent } from '../../../components/event-card/event-card.component';
import { GridSwitcherComponent } from '../../../components/grid-switcher/grid-switcher.component';
import { ApiService } from '../../../../services/api.service';
import { map, Observable, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [EventCardComponent, GridSwitcherComponent, CommonModule],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss',
})
export class EventListComponent {
  $events: Observable<Event[]> = new Observable();
  $categories: Observable<Category[]> = new Observable();
  filters: EventsFilters = {};
  gridMode: 'grid' | 'list' = 'list';
  constructor(public api: ApiService) {
    this.$categories = this.api.getCategories();
    // Pipe è un metodo che permette di concatenare più operatori RxJS
    // Permette di lavorare con i dati in modo asincrono, quindi con gli Observable
    this.$events = this.api.getEvents(this.filters).pipe(
      // SwitchMap è un operatore che permette di cambiare l'Observable in base a un'altra sorgente di dati
      switchMap((events) =>
        this.$categories.pipe(
          map((categories) =>
            events.map((event) => ({
              ...event,
              categories: event.categories?.map((categoryId: unknown) =>
                categories.find((c) => c.id == categoryId)
              ),
            }))
          )
        )
      )
    );
  }
}
