"use client";

import { Tour } from "@/models/tour/get";
import Step from "./Step";

type Props = {
  tour: Tour;
};

export default function Steps({ tour }: Props) {
  return (
    <div className="p-4 max-w-xl mx-auto ">
      <h2 className="mb-8 text-2xl font-bold">Tour plan</h2>
      {tour.schedules.map((schedule) => (
        <Step key={schedule.id} schedule={schedule} />
      ))}
    </div>
  );
}
