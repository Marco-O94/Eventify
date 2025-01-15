import { Component, Input } from '@angular/core';
import { Event } from '../../../interfaces';
import { IconComponent } from '../icon-component/icon.component';
@Component({
  selector: 'app-event-card',
  imports: [IconComponent],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss',
})
export class EventCardComponent {
  @Input() event?: Event;
  @Input() cardLayout: 'vertical' | 'horizontal' = 'vertical';
  index: any;
  constructor() {}
}
