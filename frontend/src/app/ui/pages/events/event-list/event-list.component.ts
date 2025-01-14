import { Component, input, model } from '@angular/core';
import { Category, Event, EventsFilters } from '../../../../interfaces';
import { EventCardComponent } from '../../../components/event-card/event-card.component';
import { GridSwitcherComponent } from '../../../components/grid-switcher/grid-switcher.component';
import { ApiService } from '../../../../services/api.service';
import { finalize, map, Observable, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [
    EventCardComponent,
    GridSwitcherComponent,
    CommonModule,
    NgxSkeletonLoaderModule,
  ],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss',
})
export class EventListComponent {
  $events: Observable<Event[]> = new Observable();
  $categories: Observable<Category[]> = new Observable();
  filters: EventsFilters = {};
  isLoading: boolean = true;
  gridMode: 'grid' | 'list' = 'list';
  constructor(public api: ApiService) {
    this.$categories = this.api.getCategories();

    this.$events = this.api.getEvents(this.filters).pipe(
      switchMap((events) =>
        this.$categories.pipe(
          map((categories) =>
            events.map((event) => ({
              ...event,
              categories: event.categories?.map((categoryId: unknown) =>
                categories.find((c) => c.id === categoryId)
              ),
            }))
          )
        )
      ),
      finalize(() => {
        this.isLoading = false; // Imposta isLoading su false una volta completato il caricamento
        console.log(this.isLoading);
      })
    );
  }
}
