"use client";

import React, { FC } from "react";
import { LayoutAdmin } from "@/component/page/admin/LayoutAdmin";
import Tour from "@/component/page/admin/Tour";
import MonthlyChart from "@/component/page/admin/Chart";

const Home: FC = () => {
  return (
    <LayoutAdmin>
      <MonthlyChart />
    </LayoutAdmin>
  );
};

export default Home;
