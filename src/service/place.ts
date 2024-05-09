import { GetPlaceResponse } from "@/models/place/get";
import httpCLient from "@/utils/httpClient";

export const getPlace = (): Promise<GetPlaceResponse> => {
  return httpCLient.get(`/places/all`);
};
