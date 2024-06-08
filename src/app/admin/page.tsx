"use client";

import React, { FC, useState } from "react";
import { LayoutAdmin } from "@/component/page/admin/LayoutAdmin";
import MonthlyChart from "@/component/page/admin/Chart";
import TaskCompletionChart from "@/component/page/admin/Chart/taskChart";

const Home: FC = () => {
  const [activeChart, setActiveChart] = useState<"booking" | "task">("booking");

  return (
    <LayoutAdmin>
      <div className="flex justify-around mb-5 mt-8">
        <button
          className={`px-4 py-2 rounded ${activeChart === "booking" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"}`}
          onClick={() => setActiveChart("booking")}
        >
          Thống kê doanh thu
        </button>
        <button
          className={`px-4 py-2 rounded ${activeChart === "task" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"}`}
          onClick={() => setActiveChart("task")}
        >
          Thống kê Task
        </button>
      </div>
      {activeChart === "booking" ? <MonthlyChart /> : <TaskCompletionChart />}
    </LayoutAdmin>
  );
};

export default Home;
