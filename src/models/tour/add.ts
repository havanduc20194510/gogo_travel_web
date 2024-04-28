import { Tour } from "./get";

export type AddTourRequest = {
  name: string;
  adultPrice: number;
  childPrice: number;
  babyPrice: number;
  unit: string;
  description: string;
  numberOfDays: number;
  numberOfNights: number;
  vehicle: string;
  departureLocation: string;
  hotelStar: number;
  numberOfSeats: number;
  availableSeats: number;
  status: string;
  note: string;
  tourTypeName: string;
};

export type AddTourResponse = {
  code: number;
  message: string;
  data: Tour;
};
