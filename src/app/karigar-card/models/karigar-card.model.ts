export interface KarigarCard {
  id: string;
  karigar: string;
  status: string;

  description?: string;
  // status: "Pending" | "In-Progress" | "Completed";
  createdDate?: Date;
  updatedDate?: Date;
}
