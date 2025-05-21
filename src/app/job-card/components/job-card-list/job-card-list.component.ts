import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JobCardService } from '../../services/job-card.service';
import { JobCard } from '../../models/job-card.model';

@Component({
  selector: 'app-job-card-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './job-card-list.component.html',
  styleUrls: ['./job-card-list.component.scss'],
})
export class JobCardListComponent implements OnInit {
// constructor(private jobCardService: JobCardService) {}
  jobCards: JobCard[] = [];

  ngOnInit() {
    this.jobCards = [
      { id: 'JC101', karigar: 'Ramesh', status: 'In Progress' },
      { id: 'JC102', karigar: 'Suresh', status: 'Completed' },
      { id: 'JC103', karigar: 'Mahesh', status: 'Pending' },
    ];
    // this.jobCardService
    //   .getJobCards()
    //   .subscribe((data) => (this.jobCards = data));
    // console.log('this.data', this.jobCards);
  }
}
