export type AddTourRequest = {
  request: Request;
  images: string[];
  tourType: string;
};

export type Request = {
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
};
