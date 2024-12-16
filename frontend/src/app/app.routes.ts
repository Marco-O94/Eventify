import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./ui/pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./ui/pages/admin/admin-dashboard/admin-dashboard.component').then(
        (m) => m.AdminDashboardComponent
      ),
  },
  {
    path: 'events',
    loadComponent: () =>
      import('./ui/pages/events/event-list/event-list.component').then(
        (m) => m.EventListComponent
      ),
  },
  {
    path: 'events/:id',
    loadComponent: () =>
      import('./ui/pages/events/event-detail/event-detail.component').then(
        (m) => m.EventDetailComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./ui/pages/auth/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./ui/pages/auth/register/register.component').then(
        (m) => m.RegisterComponent
      ),
  },

  {
    path: '**',
    redirectTo: 'home',
  },
];
