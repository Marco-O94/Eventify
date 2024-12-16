import { Component, Input } from '@angular/core';
import { EventProp } from '../../../models/event.model';
@Component({
  selector: 'app-event-card',
  imports: [],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss',
})
export class EventCardComponent {
  @Input() event?: EventProp;
  @Input() cardLayout: 'vertical' | 'horizontal' = 'vertical';
  constructor() {}

  get eventDate(): string {
    return this.event?.date.toDateString() ?? '';
  }

  get eventTime(): string {
    return this.event?.time ?? '';
  }
}
