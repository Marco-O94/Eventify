import { environment } from './../../environments/environment.development';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventsFilters } from '../interfaces';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getEvents(filters: EventsFilters) {
    return this.http.get(`${environment.apiUrl}/events`, {
      params: filters,
    });
  }
  getCategories() {
    return this.http.get(`${environment.apiUrl}/categories`, {});
  }
}
