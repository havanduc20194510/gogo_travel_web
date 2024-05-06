import { BookingCreateRequest } from "@/models/booking/add";
import httpCLient from "@/utils/httpClient";

export const createBooking = (request: BookingCreateRequest) => {
  return httpCLient.post("/booking/create", request);
};
