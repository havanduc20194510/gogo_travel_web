export interface BookingCreateRequest {
  tourId: string;
  email: string;
  phone: string;
  startDate: string;
  numberOfAdults: number;
  numberOfChildren: number;
  numberOfBabies: number;
  note: string;
}
