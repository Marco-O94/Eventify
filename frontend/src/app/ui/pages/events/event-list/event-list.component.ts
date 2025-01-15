import { Component, input, model } from '@angular/core';
import { Category, Event, EventsFilters } from '../../../../interfaces';
import { EventCardComponent } from '../../../components/event-card/event-card.component';
import { GridSwitcherComponent } from '../../../components/grid-switcher/grid-switcher.component';
import { ApiService } from '../../../../services/api.service';
import { finalize, map, Observable, Subscription, switchMap } from 'rxjs';
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
  filters: EventsFilters = {};
  isLoading = true;
  gridMode: 'grid' | 'list' = 'list';
  $events: Observable<Event[]>;
  mainSubscription: Subscription = new Subscription();
  constructor(private api: ApiService) {
    this.$events = this.api.getEvents(this.filters).pipe(
      switchMap((events) =>
        this.api.getCategories().pipe(
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
        this.isLoading = false;
      })
    );
  }

  ngOnInit() {
    this.mainSubscription.add(this.$events.subscribe());
  }

  ngOnDestroy() {
    this.mainSubscription.unsubscribe();
  }
}
