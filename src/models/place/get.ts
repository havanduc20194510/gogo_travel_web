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
}

export interface Image {
  id: number;
  url: string;
}
