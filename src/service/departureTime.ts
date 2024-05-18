import { CreateDepartureTimeRequest } from "@/models/departureTime/create";
import { GetDepartureTimeResponse } from "@/models/departureTime/get";
import { UpdateDepartureTimeRequest } from "@/models/departureTime/update";
import httpCLient from "@/utils/httpClient";

export const getDepartureTimesByTourId = (
  tourId: string
): Promise<GetDepartureTimeResponse> => {
  return httpCLient.get(`/departure-time/get-by-tour-id/${tourId}`);
};

export const createDepartureTime = (
  request: CreateDepartureTimeRequest
): Promise<GetDepartureTimeResponse> => {
  return httpCLient.post(`/departure-time/create`, request);
};

export const updateDepartureTime = (
  departureTimeId: string,
  request: UpdateDepartureTimeRequest
): Promise<GetDepartureTimeResponse> => {
  return httpCLient.put(`/departure-time/update/${departureTimeId}`, request);
};

export const deleteDepartureTime = (departureTimeId: string) => {
  return httpCLient.delete(`/departure-time/delete/${departureTimeId}`);
};
