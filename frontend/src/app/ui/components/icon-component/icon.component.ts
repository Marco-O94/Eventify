import { Component, input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  featherCalendar,
  featherCode,
  featherGrid,
  featherHome,
  featherList,
  featherMic,
} from '@ng-icons/feather-icons';
import { IconType } from '../../../types';
import { heroLightBulbSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'Icon',
  imports: [NgIconComponent],
  providers: [
    provideIcons({
      home: featherHome,
      calendar: featherCalendar,
      list: featherList,
      grid: featherGrid,
      code: featherCode,
      mic: featherMic,
      lightbulb: heroLightBulbSolid,
    }),
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
