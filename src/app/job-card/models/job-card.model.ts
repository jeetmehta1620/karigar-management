export interface JobCard {
  id: number;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  createdDate: Date;
  updatedDate: Date;
}