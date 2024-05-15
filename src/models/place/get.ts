export interface GetPlaceResponse {
  code: number;
  message: string;
  data: Place[];
}

export interface Place {
  id: number;
  name: string;
  description: string;
  address: string;
  images: Image[];
  location: string;
  timeOpen: string;
  timeClose: string;
  note: string;
  activities: string;
  totalView: number;
}

export interface Image {
  id: number;
  url: string;
}

export interface GetPlaceDetailResponse {
  code: number;
  message: string;
  data: Place;
}

export interface GetPlaceSuggestionResponse {
  code: number;
  message: string;
  data: PlaceSuggestion[];
}
export interface PlaceSuggestion {
  location: string;
  description: string;
  img: string;
}

export interface GetPlaceSuggestionRequest {
  location: string;
  time: string;
  activity: string;
}
