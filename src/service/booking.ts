import { BookingCreateRequest } from "@/models/booking/add";
import { GetBookingResponse } from "@/models/booking/get";
import httpCLient from "@/utils/httpClient";

export const createBooking = (request: BookingCreateRequest) => {
  return httpCLient.post("/booking/create", request);
};

export const getAllBooking = (): Promise<GetBookingResponse> => {
  return httpCLient.get(`/booking/all`);
};
