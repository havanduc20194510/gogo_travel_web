import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { Spin, Table } from "antd";
import type { TableProps } from "antd";
import { getAllBooking } from "@/service/booking";
import { Booking } from "@/models/booking/get";
import { formatDate } from "@/utils/date";

type DataType = {
  user: string;
  email: string;
  phone: string;
  startDate: string;
  numberOfAdults: number;
  numberOfChildren: number;
  numberOfBabies: number;
  note: string;
  bookingDate: string;
  total: number;
  status: string;
  tour: string;
};

const columns: TableProps<DataType>["columns"] = [
  {
    title: "User",
    dataIndex: "user",
    key: "user",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  { title: "Phone", dataIndex: "phone", key: "phone" },
  { title: "Start date", dataIndex: "startDate", key: "startDate" },
  {
    title: "Number of adults",
    dataIndex: "numberOfAdults",
    key: "numberOfAdults",
  },
  {
    title: "Number of children",
    dataIndex: "numberOfChildren",
    key: "numberOfChildren",
  },
  {
    title: "Number of babies",
    dataIndex: "numberOfBabies",
    key: "numberOfBabies",
  },
  { title: "Note", dataIndex: "note", key: "note" },
  { title: "Booking date", dataIndex: "bookingDate", key: "bookingDate" },
  { title: "Total", dataIndex: "total", key: "total" },
  { title: "Booking status", dataIndex: "bookingStatus", key: "bookingStatus" },
  { title: "Tour", dataIndex: "tour", key: "tour" },
];

const Users: FC = () => {
  const [bookings, setBookings] = useState<Booking[]>();
  const [loading, setLoading] = useState(false);

  const loadBookings = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getAllBooking();
      setBookings(response.data);
    } catch {
      //Do nothing
    } finally {
      setLoading(false);
    }
  }, []);

  const data: DataType[] = useMemo(() => {
    return (bookings ?? []).map((booking) => ({
      key: booking.id,
      user: booking.user.username ?? "-",
      email: booking.email ?? "-",
      phone: booking.phone ?? "-",
      startDate: booking.startDate ?? "-",
      numberOfAdults: booking.numberOfAdults ?? "-",
      numberOfChildren: booking.numberOfChildren ?? "-",
      numberOfBabies: booking.numberOfBabies ?? "-",
      note: booking.note ?? "-",
      bookingDate: formatDate(new Date(booking.bookingDate)) ?? "-",
      total: booking.total ?? "-",
      status: booking.status ?? "-",
      tour: booking.tour.name ?? "-",
    }));
  }, [bookings]);

  useEffect(() => {
    loadBookings();
  }, [loadBookings]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spin tip="Loading..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Table columns={columns} dataSource={data} />
    </div>
  );
};
export default Users;
