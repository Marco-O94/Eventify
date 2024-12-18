import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category, Event, EventsFilters } from '../interfaces';
import { environment } from './../../environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  getEvents(filters: EventsFilters) {
    return this.http.get<Event[]>(`${environment.apiUrl}/events`, {
      params: filters as any,
    });
  }
  getCategories() {
    return this.http.get<Category[]>(`${environment.apiUrl}/categories`);
  }
  getEvent(id: string) {
    return this.http.get<Event>(`${environment.apiUrl}/events/${id}`);
  }
}
