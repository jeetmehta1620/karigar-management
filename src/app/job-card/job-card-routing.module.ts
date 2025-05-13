import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobCardListComponent } from './components/job-card-list/job-card-list.component';
import { JobCardFormComponent } from './components/job-card-form/job-card-form.component';
import { JobCardDetailComponent } from './components/job-card-detail/job-card-detail.component';

const routes: Routes = [
  { path: '', component: JobCardListComponent },
  { path: 'create', component: JobCardFormComponent },
  { path: 'edit/:id', component: JobCardFormComponent },
  { path: 'detail/:id', component: JobCardDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobCardRoutingModule { }