import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KarigarCard } from '../models/karigar-card.model';

@Injectable({
  providedIn: 'root'
})
export class KarigarCardService {
  private apiUrl = 'https://api.example.com/jobcards'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getJobCards(): Observable<KarigarCard[]> {
    return this.http.get<KarigarCard[]>(this.apiUrl);
  }

  // getJobCard(id: number): Observable<JobCard> {
  //   return this.http.get<JobCard>(`${this.apiUrl}/${id}`);
  // }

  // createJobCard(jobCard: JobCard): Observable<JobCard> {
  //   return this.http.post<JobCard>(this.apiUrl, jobCard);
  // }

  // updateJobCard(jobCard: JobCard): Observable<JobCard> {
  //   return this.http.put<JobCard>(`${this.apiUrl}/${jobCard.id}`, jobCard);
  // }

  // deleteJobCard(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/${id}`);
  // }
}