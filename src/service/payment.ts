import {
  GetPaymentListResponse,
  GetPaymentResponse,
  PaymentRequest,
} from "@/models/payment/payment";
import httpCLient from "@/utils/httpClient";

export const paymentVnPay = (
  request: PaymentRequest
): Promise<GetPaymentResponse> => {
  return httpCLient.get(`/payment/vn-pay/submit`, request);
};

export const paymentCheck = (
  request: Record<string, string>
): Promise<GetPaymentResponse> => {
  return httpCLient.get(`/payment/vn-pay/check-payment`, request);
};

export const paymentByUserId = (
  userId: string
): Promise<GetPaymentListResponse> => {
  return httpCLient.get(`/payment/list/${userId}`);
};
