"use client";

import React, { FC } from "react";
import { LayoutAdmin } from "@/component/page/admin/LayoutAdmin";
import Bookings from "@/component/page/admin/Booking";

const Booking: FC = () => {
  return (
    <LayoutAdmin>
      <Bookings />
    </LayoutAdmin>
  );
};

export default Booking;
