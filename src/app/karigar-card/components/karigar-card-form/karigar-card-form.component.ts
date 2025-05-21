import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-karigar-card-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './karigar-card-form.component.html',
  styleUrls: ['./karigar-card-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KarigarCardFormComponent {
  jobCard = {
    karigar: '',
    task: '',
    status: 'Pending',
    dueDate: '',
  };

  constructor(private router: Router) {}

  saveJobCard() {
    console.log('Creating job card:', this.jobCard);
    // You can POST this to backend here.
    alert('Job card created!');
    this.router.navigate(['/job-cards']);
  }
}
