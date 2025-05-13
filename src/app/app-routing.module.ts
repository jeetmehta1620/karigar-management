import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'job-cards',
    loadChildren: () => import('./job-card/job-card.module').then(m => m.JobCardModule)
  },
  {
    path: '',
    redirectTo: '/job-cards',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }