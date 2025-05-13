import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { JobCardService } from '../../services/job-card.service';
import { JobCard } from '../../models/job-card.model';

@Component({
  selector: 'app-job-card-list',
  templateUrl: './job-card-list.component.html',
  styleUrls: ['./job-card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobCardListComponent implements OnInit {
  jobCards: JobCard[] = [];

  constructor(private jobCardService: JobCardService) {}

  ngOnInit(): void {
    this.loadJobCards();
  }

  loadJobCards(): void {
    this.jobCardService.getJobCards().subscribe((data: JobCard[]) => {
      this.jobCards = data;
    });
  }
}