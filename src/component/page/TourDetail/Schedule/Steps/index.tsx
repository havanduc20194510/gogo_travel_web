"use client";

import { Tour } from "@/models/tour/get";
import Step from "./Step";
import { getFromLocalStorage } from "@/utils/localStorage";
import { User } from "@/models/user/get";

type Props = {
  tour: Tour;
};

export default function Steps({ tour }: Props) {
  const user: User | undefined = getFromLocalStorage("user");
  return (
    <div
      className={`p-4 ${user?.roles?.includes("USER") && "max-w-xl"} mx-auto `}
    >
      <h2 className="mb-8 text-2xl font-bold">Tour plan</h2>
      {tour.schedules?.map((schedule, index) => (
        <Step key={schedule.id} index={index} schedule={schedule} />
      ))}
    </div>
  );
}
