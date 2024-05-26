import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { Button, Input, Spin, Table } from "antd";
import type { TableProps } from "antd";
import { getAllBooking, getBookingByPhoneOrEmail } from "@/service/booking";
import { Booking } from "@/models/booking/get";
import { formatDate } from "@/utils/date";
import { BookingStatus } from "@/component/ui/BookingStatus";
import { SearchFormRequest } from "@/models/task/get";

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
  {
    title: "Booking status",
    dataIndex: "status",
    key: "status",
    render: (_, record) => (
      <div className="w-[100px] text-sm">
        <BookingStatus status={record.status} />
      </div>
    ),
  },
  { title: "Tour", dataIndex: "tour", key: "tour" },
];

const Users: FC = () => {
  const [bookings, setBookings] = useState<Booking[]>();
  const [loading, setLoading] = useState(false);
  const [searchForm, setSearchForm] = useState<SearchFormRequest>();

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

  const handleSearch = useCallback(async () => {
    try {
      if (searchForm?.email || searchForm?.phone) {
        const res = await getBookingByPhoneOrEmail(searchForm);
        setBookings(res.data);
      } else {
        loadBookings();
      }
    } catch {
      // Do nothing
    }
  }, [loadBookings, searchForm]);

  const handleEmailChange = useCallback((e: any) => {
    setSearchForm((prev) => ({ ...prev, email: e.target.value }));
  }, []);

  const handlePhoneChange = useCallback((e: any) => {
    setSearchForm((prev) => ({ ...prev, phone: e.target.value }));
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spin tip="Loading..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="flex items-center gap-4 my-10">
        <div>
          <div className="font-bold">Email:</div>
          <Input
            size="large"
            placeholder="Duc@gmail.com"
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <div className="font-bold">Số điện thoại: </div>
          <Input
            size="large"
            placeholder="0861903348"
            onChange={handlePhoneChange}
          />
        </div>
        <Button
          className="mt-5"
          type="primary"
          size="large"
          onClick={handleSearch}
        >
          Tìm kiếm
        </Button>
      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};
export default Users;
