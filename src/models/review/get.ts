export interface GetTourReviewResponse {
  code: number;
  message: string;
  data: Review[];
}

export interface GetTourReviewDetailResponse {
  code: number;
  message: string;
  data: Review;
}

export interface Review {
  tourId: string;
  userId: string;
  userName: string;
  content: string;
  rating: number;
}

export interface GetAverageRatingResponse {
  code: number;
  message: string;
  data: AverageRating;
}
export interface AverageRating {
  averageRating: number;
  totalReview: number;
}
