import { BookingCreateRequest } from "@/models/booking/add";
import {
  GetBookingDetailResponse,
  GetBookingResponse,
} from "@/models/booking/get";
import httpCLient from "@/utils/httpClient";

export const createBooking = (
  request: BookingCreateRequest
): Promise<GetBookingDetailResponse> => {
  return httpCLient.post("/booking/create", request);
};

export const getAllBooking = (): Promise<GetBookingResponse> => {
  return httpCLient.get(`/booking/all`);
};

export const getBookingByUser = (
  userId: string
): Promise<GetBookingResponse> => {
  return httpCLient.get(`/booking/get-by-user/${userId}`);
};

export const getBookingById = (
  id: string
): Promise<GetBookingDetailResponse> => {
  return httpCLient.get(`/booking/get/${id}`, { id });
};
