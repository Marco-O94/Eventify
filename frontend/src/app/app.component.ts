import { heroCalendarSolid, heroHomeSolid } from '@ng-icons/heroicons/solid';
import { provideIcons } from '@ng-icons/core';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './ui/layout/sidebar/sidebar.component';
import { LoaderComponent } from './ui/components/loader/loader.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, LoaderComponent],
  providers: [
    provideIcons({ home: heroHomeSolid, calendar: heroCalendarSolid }),
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Eventify';
}
