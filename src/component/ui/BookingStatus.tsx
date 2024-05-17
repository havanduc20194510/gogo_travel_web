"use client";

import { FC } from "react";

interface Status {
  label: string;
  class: string;
}

type BookingStatusType = Record<string, Status>;

type Props = {
  status: string;
};

export const BookingStatus: FC<Props> = ({ status }) => {
  const bookingStatus: BookingStatusType = {
    PENDING: {
      label: "Chờ thanh toán",
      class:
        "bg-yellow-300 text-yellow-900 inline-block text-center px-2 py-1 rounded text-md font-semibold",
    },
    CONFIRMED: {
      label: "Đã xác nhận",
      class:
        "bg-green-300 text-green-900 inline-block text-center px-2 py-1 rounded text-md font-semibold",
    },
    CANCELLED: {
      label: "Đã huỷ",
      class:
        "bg-red-300 text-red-900 inline-block text-center px-2 py-1 rounded text-md font-semibold",
    },
  };

  return (
    <div className={`${bookingStatus[status].class} `}>
      {bookingStatus[status].label}
    </div>
  );
};
