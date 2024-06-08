"use client";

import React, { FC } from "react";
import { LayoutAdmin } from "@/component/page/admin/LayoutAdmin";
import MonthlyChart from "@/component/page/admin/Chart";
import TaskCompletionChart from "@/component/page/admin/Chart/taskChart";

const Home: FC = () => {
  return (
    <LayoutAdmin>
      <MonthlyChart />
      <TaskCompletionChart />
    </LayoutAdmin>
  );
};

export default Home;
