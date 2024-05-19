import { PaymentData } from "@/models/payment/payment";
import { paymentByUserId } from "@/service/payment";
import { formatPrice } from "@/utils/price";
import { useCallback, useEffect, useState } from "react";

export const PaymentList = ({ userId }: { userId?: string }) => {
  const [paymentList, setPaymentList] = useState<PaymentData[]>();

  const getPaymentList = useCallback(async () => {
    const res = await paymentByUserId(userId ?? "");
    setPaymentList(res.data);
  }, [userId]);

  useEffect(() => {
    getPaymentList();
  }, [getPaymentList]);

  return (
    <div className="overflow-x-auto mt-10">
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Tên người dùng</th>
            <th className="py-2 px-4 border">Số điện thoại</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">
              <div className="w-[200px]">Tên tour</div>{" "}
            </th>
            <th className="py-2 px-4 border">Số tiền</th>
            <th className="py-2 px-4 border">Phương thức thanh toán</th>
            <th className="py-2 px-4 border">Mã ngân hàng</th>
            <th className="py-2 px-4 border">Ngày thanh toán</th>
            <th className="py-2 px-4 border">Thông tin đặt hàng</th>
            <th className="py-2 px-4 border">Trạng thái thanh toán</th>
          </tr>
        </thead>
        <tbody>
          {paymentList?.map((booking) => (
            <tr key={booking.id}>
              <td className="py-2 px-4 border">{booking.username}</td>
              <td className="py-2 px-4 border">{booking.phone}</td>
              <td className="py-2 px-4 border">{booking.email}</td>
              <td className="py-2 px-4 border">{booking.tourName}</td>
              <td className="py-2 px-4 border">
                {formatPrice(Number(booking.amount))}
              </td>
              <td className="py-2 px-4 border">{booking.paymentMethod}</td>
              <td className="py-2 px-4 border">{booking.bankCode}</td>
              <td className="py-2 px-4 border">{booking.payDate}</td>
              <td className="py-2 px-4 border">{booking.orderInfo}</td>
              <td className="py-2 px-4 border">{booking.paymentStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
