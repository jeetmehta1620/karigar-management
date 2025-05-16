import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-card-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './job-card-form.component.html',
  styleUrls: ['./job-card-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobCardFormComponent {
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
