import { Component, input, model } from '@angular/core';
import { Event } from '../../../../interfaces';
import { EventCardComponent } from '../../../components/event-card/event-card.component';
import { GridSwitcherComponent } from '../../../components/grid-switcher/grid-switcher.component';
import { EventTableCardComponent } from '../../../components/event-table/event-table-card.component';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [EventCardComponent, GridSwitcherComponent, EventTableCardComponent],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss',
})
export class EventListComponent {
  constructor() {}
  // Input è un modo per definire una variabile che può essere passata da un altro componente parent ma quest'ultimo non si aggiorna
  events = input<Event[]>();

  gridMode: 'grid' | 'list' = 'list';
}
