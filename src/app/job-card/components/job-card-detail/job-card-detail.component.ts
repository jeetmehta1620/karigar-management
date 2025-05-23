import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-card-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './job-card-detail.component.html',
  styleUrls: ['./job-card-detail.component.scss'],
})
export class JobCardDetailComponent implements OnInit {
  jobCardId: string = '';
  jobCard: any = {};

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.jobCardId = this.route.snapshot.paramMap.get('id') || '';
    // Ideally, fetch from backend using jobCardId
    this.jobCard = {
      id: this.jobCardId,
      karigar: 'Ramesh',
      task: 'Gold Chain',
      status: 'In Progress',
      dueDate: '2025-05-20',
    };
  }

  saveJobCard() {
    console.log('Saving job card:', this.jobCard);
    // Call API to update job card here
  }
}
