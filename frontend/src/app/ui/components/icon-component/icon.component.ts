import { Component, input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroCalendarDaysSolid,
  heroHomeSolid,
} from '@ng-icons/heroicons/solid';
import { IconType } from '../../../types';

@Component({
  selector: 'Icon',
  imports: [NgIconComponent],
  providers: [
    provideIcons({ home: heroHomeSolid, calendar: heroCalendarDaysSolid }),
  ],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  // required icon
  readonly icon = input.required<IconType>();
  readonly size = input<string>('1.5em');
  readonly color = input<string>('inherit');
  readonly className = input<string>('');
  constructor() {}
}
