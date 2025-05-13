import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { JobCardRoutingModule } from './job-card-routing.module';
import { JobCardListComponent } from './components/job-card-list/job-card-list.component';
import { JobCardFormComponent } from './components/job-card-form/job-card-form.component';
import { JobCardDetailComponent } from './components/job-card-detail/job-card-detail.component';

@NgModule({
  declarations: [
    // JobCardListComponent,
    // JobCardFormComponent,
    // JobCardDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    JobCardRoutingModule
  ],
  exports: [
    // JobCardListComponent,
    // JobCardFormComponent,
    // JobCardDetailComponent
  ]
})
export class JobCardModule { }