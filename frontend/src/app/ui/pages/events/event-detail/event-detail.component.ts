import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable } from 'rxjs';
import { Event } from '../../../../interfaces';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.scss',
})
export class EventDetailComponent {
  $event!: Observable<Event>;
  eventID: string = '';
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) {
    this.route.params.subscribe((data) => {
      /**
       * Qui si usa l'osservabile per ottenere l'evento con l'id
       * e si applica una pipe per gestire gli errori
       */
      this.$event = this.api.getEvent(data['id']).pipe(
        catchError((error, caught) => {
          console.error(error, caught);
          this.router.navigate(['/events']);
          return caught;
        })
      );

      this.$event.subscribe(() => {
        this.loading = false;
      });
    });
  }
}
