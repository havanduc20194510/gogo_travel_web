import { Booking } from "@/models/booking/get";
import { User } from "@/models/user/get";
import { getBookingByUser } from "@/service/booking";
import { getFromLocalStorage } from "@/utils/localStorage";
import { useCallback, useEffect, useState } from "react";

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

  return <div>Booking </div>;
};
