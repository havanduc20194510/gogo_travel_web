import { TourListResponse } from "@/models/tour";
import httpCLient from "@/utils/httpClient";

const API_ENDPOINT = "/tour/list";

export const getTours = (): Promise<TourListResponse> => {
  return httpCLient.get(API_ENDPOINT);
};
