import { CreateTourReviewRequest } from "@/models/review/create";
import {
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
