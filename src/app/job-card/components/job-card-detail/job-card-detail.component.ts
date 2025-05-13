import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobCardService } from '../../services/job-card.service';
import { JobCard } from '../../models/job-card.model';

@Component({
  selector: 'app-job-card-detail',
  templateUrl: './job-card-detail.component.html',
  styleUrls: ['./job-card-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobCardDetailComponent implements OnInit {
  jobCard!: JobCard;

  constructor(
    private route: ActivatedRoute,
    private jobCardService: JobCardService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // if (id) {
    //   this.jobCardService.getJobCardById(id).subscribe((data) => {
    //     this.jobCard = data;
    //   });
    // }
  }
}