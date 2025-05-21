import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { KarigarCardRoutingModule } from './karigar-card-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    KarigarCardRoutingModule,
  ],
  exports: [
    // JobCardListComponent,
    // JobCardFormComponent,
    // JobCardDetailComponent
  ],
})
export class KarigarCardModule {}
