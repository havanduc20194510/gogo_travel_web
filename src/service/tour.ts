import { AddTourRequest } from "@/models/tour/add";
import { TourListResponse, TourResponse } from "@/models/tour/get";
import httpCLient from "@/utils/httpClient";

const API_ENDPOINT = "/tour";

export const getTours = (): Promise<TourListResponse> => {
  return httpCLient.get(`${API_ENDPOINT}/list`);
};

export const addTour = (request: AddTourRequest) => {
  return httpCLient.post(`${API_ENDPOINT}/create`, request);
};

export const getTour = (id: string): Promise<TourResponse> => {
  return httpCLient.get(`${API_ENDPOINT}/${id}`);
};
