import { CreateTourReviewRequest } from "@/models/review/create";
import {
  GetAverageRatingResponse,
  GetTourReviewDetailResponse,
  GetTourReviewResponse,
} from "@/models/review/get";
import httpCLient from "@/utils/httpClient";

export const getTourReview = (
  tourId: string
): Promise<GetTourReviewResponse> => {
  return httpCLient.get(`/tour-reviews/list/${tourId}`);
};

export const createTourReview = (
  request: CreateTourReviewRequest
): Promise<GetTourReviewDetailResponse> => {
  return httpCLient.post(`/tour-reviews/create`, request);
};

export const getTourAverageRating = (
  tourId: string
): Promise<GetAverageRatingResponse> => {
  return httpCLient.get(`/tour-reviews/average-rating/${tourId}`);
};
