import {
  GetPlaceDetailResponse,
  GetPlaceResponse,
  GetPlaceSuggestionRequest,
  GetPlaceSuggestionResponse,
} from "@/models/place/get";
import { SearchPlaceRequest, SearchPlaceResponse } from "@/models/place/search";
import httpCLient from "@/utils/httpClient";
import axios from "axios";

export const getPlace = (): Promise<GetPlaceResponse> => {
  return httpCLient.get(`/places/all`);
};

export const searchPlaces = (
  request: SearchPlaceRequest
): Promise<SearchPlaceResponse> => {
  return httpCLient.get(`/places/search/pagination`, request);
};

export const getPlaceById = (id: string): Promise<GetPlaceDetailResponse> => {
  return httpCLient.get(`/places/${id}`, { id });
};

export const increaseViewPlace = (id: string) => {
  return httpCLient.get(`/places/increase-view/${id}`, { id });
};

export const getTopPlace = (): Promise<GetPlaceResponse> => {
  return httpCLient.get(`/places/top-recommend`);
};

export const placeSuggestion = (
  request: GetPlaceSuggestionRequest
): Promise<GetPlaceSuggestionResponse> => {
  return axios.get(`${window.location.origin}/api/suggestions`, {
    params: request,
  });
};
