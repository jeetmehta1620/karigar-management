import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router'; // needed if you're using <router-outlet>

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, RouterModule] // import this if using router-outlet
})
export class AppComponent {
  title = 'karigar-management';
}
