export type PaymentRequest = {
  bookingId: string;
  total: number;
  bankCode: string;
  language: string;
};

export interface GetPaymentResponse {
  code: number;
  message: string;
  data: Payment;
}
export interface Payment {
  code: string;
  message: string;
  paymentUrl: string;
}
