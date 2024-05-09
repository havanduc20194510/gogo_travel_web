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
  image: string;
  location: string;
  timeOpen: string;
  timeClose: string;
  note: string;
  activities: string;
}
