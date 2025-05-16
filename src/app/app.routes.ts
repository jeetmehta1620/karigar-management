import { Routes } from '@angular/router';
import { DashboardComponent } from './job-card/components/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent }, // Set as home route
  {
    path: 'job-cards',
    loadComponent: () =>
      import(
        './job-card/components/job-card-list/job-card-list.component'
      ).then((m) => m.JobCardListComponent),
  },
  {
    path: 'job-cards/new',
    loadComponent: () =>
      import(
        './job-card/components/job-card-form/job-card-form.component'
      ).then((m) => m.JobCardFormComponent),
  },
  {
    path: 'job-cards/:id',
    loadComponent: () =>
      import(
        './job-card/components/job-card-detail/job-card-detail.component'
      ).then((m) => m.JobCardDetailComponent),
  },

  //   {
  //     path: 'job-cards',
  //     loadComponent: () =>
  //       import('./features/job-cards/job-cards.component').then(m => m.JobCardsComponent),
  //   },
  //   // Add more routes here
];
