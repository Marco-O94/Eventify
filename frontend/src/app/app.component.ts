import { heroCalendarSolid, heroHomeSolid } from '@ng-icons/heroicons/solid';
import { provideIcons } from '@ng-icons/core';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './ui/layout/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent],
  providers: [
    provideIcons({ home: heroHomeSolid, calendar: heroCalendarSolid }),
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Eventify';
}
