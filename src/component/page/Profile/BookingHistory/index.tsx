"use client";

import { Booking } from "@/models/booking/get";
import { User } from "@/models/user/get";
import { getBookingByUser } from "@/service/booking";
import { getFromLocalStorage } from "@/utils/localStorage";
import { useCallback, useEffect, useState } from "react";
import TourItem from "../../domain/TourItem";
import { formatDate } from "@/utils/date";
import { formatPrice } from "@/utils/price";
import { BookingStatus } from "@/component/ui/BookingStatus";

interface Status {
  label: string;
  class: string;
}

type BookingStatusType = Record<string, Status>;

export const BookingHistory = () => {
  const user: User | undefined = getFromLocalStorage("user");
  const [bookingList, setBookingList] = useState<Booking[]>();

  const getBooking = useCallback(async () => {
    const res = await getBookingByUser(user?.id ?? "");
    setBookingList(res.data);
  }, [user?.id]);

  useEffect(() => {
    getBooking();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    <ul className="mt-10">
      {bookingList?.map((booking) => (
        <>
          <div className="text-right">
            Trạng thái:
            <span className="ml-2">
              <BookingStatus status={booking.status} />
            </span>
            {booking.status === "PENDING" && (
              <a
                href={`/payment/${booking.id}`}
                className="bg-blue-300 text-blue-900 inline-block text-center px-2 py-1 rounded text-md font-semibold ml-3"
              >
                Thanh toán
              </a>
            )}
          </div>
          <a
            href={`/tours/${booking.tour.tourId}`}
            key={booking.id}
            className="shadow-2xl p-4 my-3"
          >
            <div className="font-medium text-gray-600">
              <p>Booking date: {formatDate(new Date(booking.bookingDate))}</p>
              <p>Start date: {formatDate(new Date(booking.startDate))}</p>
              <p>Total price: {formatPrice(booking.total)}</p>
              <p>Number of adults: {booking.numberOfAdults}</p>
              <p>Number of babies: {booking.numberOfBabies}</p>
              <p>Number of children: {booking.numberOfChildren}</p>
              <p className="text-2xl">Note: {booking.note}</p>
            </div>
            <TourItem tour={booking.tour} />
          </a>
        </>
      ))}
    </ul>
  );
};
