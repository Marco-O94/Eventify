import { Component, input, InputSignal } from '@angular/core';
import { Category } from './../../../interfaces/index';

@Component({
  selector: 'app-events-categories',
  imports: [],
  templateUrl: './events-categories.component.html',
  styleUrl: './events-categories.component.scss',
})
export class EventsCategoriesComponent {
  categories: InputSignal<Category[]> = input<Category[]>([]);
}
