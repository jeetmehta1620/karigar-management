import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { KarigarCard } from '../../models/karigar-card.model';

@Component({
  selector: 'app-karigar-card-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './karigar-card-list.component.html',
  styleUrls: ['./karigar-card-list.component.scss'],
})
export class KarigarCardListComponent implements OnInit {
  // constructor(private jobCardService: JobCardService) {}
  jobCards: KarigarCard[] = [];

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
