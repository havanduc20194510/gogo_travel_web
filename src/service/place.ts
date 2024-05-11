import { GetPlaceResponse } from "@/models/place/get";
import { SearchPlaceRequest, SearchPlaceResponse } from "@/models/place/search";
import httpCLient from "@/utils/httpClient";

export const getPlace = (): Promise<GetPlaceResponse> => {
  return httpCLient.get(`/places/all`);
};

export const searchPlaces = (
  request: SearchPlaceRequest
): Promise<SearchPlaceResponse> => {
  return httpCLient.get(`/places/search`, request);
};
