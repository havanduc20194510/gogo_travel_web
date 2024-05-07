"use client";

import React, { FC } from "react";
import { LayoutAdmin } from "@/component/page/admin/LayoutAdmin";
import TourForm from "@/component/page/admin/Tour/Form";

const Page: FC = () => {
  return (
    <LayoutAdmin>
      <TourForm />
    </LayoutAdmin>
  );
};

export default Page;
