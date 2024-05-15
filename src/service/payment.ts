import { GetPaymentResponse, PaymentRequest } from "@/models/payment/payment";
import httpCLient from "@/utils/httpClient";

export const paymentVnPay = (
  request: PaymentRequest
): Promise<GetPaymentResponse> => {
  return httpCLient.get(`/payment/vn-pay`, request);
};
