import { Component } from '@angular/core';
import { EventsCategoriesComponent } from '../../components/events-categories/events-categories.component';
import { Category } from '../../../interfaces';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EventsCategoriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  categories: Category[] = [];
  constructor(private apiService: ApiService) {
    this.apiService.getCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
    });
  }
}
