import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobCardModule } from './job-card/job-card.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    JobCardModule,
    AppComponent,
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}