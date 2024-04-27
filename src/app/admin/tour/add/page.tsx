"use client";

import React, { FC } from "react";
import { LayoutAdmin } from "@/component/page/admin/LayoutAdmin";
import Tour from "@/component/page/admin/Tour";
import TourForm from "@/component/page/admin/Tour/Form";

const Page: FC = () => {
  return (
    <LayoutAdmin>
      <TourForm />
    </LayoutAdmin>
  );
};

export default Page;
