import { Place } from "./get";

export type SearchPlaceRequest = {
  name: string;
  address: string;
  activities: string;
};

export type SearchPlaceResponse = {
  code: number;
  message: string;
  data: Place[];
};
