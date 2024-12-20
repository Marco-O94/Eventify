import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category, Event, EventsFilters } from '../interfaces';
import { environment } from './../../environments/environment.development';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getEvents(filters: EventsFilters): Observable<Event[]> {
    return this.http.get<Event[]>(`${environment.apiUrl}/events`, {
      params: filters as any,
    });
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiUrl}/categories`);
  }

  getEvent(id: string): Observable<Event> {
    return this.http.get<Event>(`${environment.apiUrl}/events/${id}`);
  }
}
