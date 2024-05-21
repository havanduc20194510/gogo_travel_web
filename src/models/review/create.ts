export interface CreateTourReviewRequest {
  tourId: string;
  userId: string;
  content: string;
  rating: number;
}
