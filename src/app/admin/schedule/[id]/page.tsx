"use client";

import React, { FC } from "react";
import { LayoutAdmin } from "@/component/page/admin/LayoutAdmin";
import Schedule from "@/component/page/admin/Schedule";

const SchedulePage: FC = () => {
  return (
    <LayoutAdmin>
      <Schedule />
    </LayoutAdmin>
  );
};

export default SchedulePage;
