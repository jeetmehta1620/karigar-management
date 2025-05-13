import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobCardService } from '../../services/job-card.service';
import { JobCard } from '../../models/job-card.model';

@Component({
  selector: 'app-job-card-form',
  templateUrl: './job-card-form.component.html',
  styleUrls: ['./job-card-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobCardFormComponent implements OnInit {
  jobCardForm: FormGroup;

  constructor(private fb: FormBuilder, private jobCardService: JobCardService) {
    this.jobCardForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      dueDate: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.jobCardForm.valid) {
      const jobCard: JobCard = this.jobCardForm.value;
      // this.jobCardService.saveJobCard(jobCard).subscribe(() => {
      //   // Handle successful save
      // });
    }
  }
}