import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KarigarCardDetailComponent } from './components/karigar-card-detail/karigar-card-detail.component';
import { KarigarCardFormComponent } from './components/karigar-card-form/karigar-card-form.component';
import { KarigarCardListComponent } from './components/karigar-card-list/karigar-card-list.component';

const routes: Routes = [
  { path: '', component: KarigarCardListComponent },
  { path: 'create', component: KarigarCardFormComponent },
  { path: 'edit/:id', component: KarigarCardFormComponent },
  { path: 'detail/:id', component: KarigarCardDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KarigarCardRoutingModule { }