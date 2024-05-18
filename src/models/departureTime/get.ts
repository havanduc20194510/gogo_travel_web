export interface GetDepartureTimeResponse {
  code: number;
  message: string;
  data: DepartureTime[];
}

export interface DepartureTime {
  id: string;
  startDate: string;
  numberOfSeats: number;
  bookedSeats: number;
  available: boolean;
}
