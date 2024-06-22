/* eslint-disable @next/next/no-img-element */
"use client";

import { Tour } from "@/models/tour/get";
import Form from "../Form";
import Steps from "./Steps";
import { getFromLocalStorage } from "@/utils/localStorage";
import { User } from "@/models/booking/get";

type Props = {
  tour?: Tour;
};

export default function Schedule({ tour }: Props) {
  const user: User | undefined = getFromLocalStorage("user");

  if (!tour) {
    return null;
  }

  if (!tour.schedules?.length) {
    return <p className="font-bold text-xl">Chưa có lịch trình</p>;
  }

  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="col-span-3">
        <Steps tour={tour} />
      </div>
      {user?.roles?.includes("USER") && (
        <div className="col-span-2">
          <Form tour={tour} />
          <img src="/bg.png" alt="" />
        </div>
      )}
    </div>
  );
}
