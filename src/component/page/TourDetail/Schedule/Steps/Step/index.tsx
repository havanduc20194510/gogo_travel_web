"use client";

import { Schedule } from "@/models/tour/get";
import ScheduleTable from "./ScheduleTable";

type Props = {
  schedule?: Schedule;
};

export default function Step({ schedule }: Props) {
  return (
    <div className="flex">
      <div className="mr-4 flex flex-col items-center">
        <div className="flex h-10 w-10 leading-10	 items-center justify-center text-white rounded-xl bg-amber-600 ">
          {schedule?.id}
        </div>
        <div className="h-full border-dashed border border-amber-600" />
      </div>
      <div className="pt-1 pb-8">
        <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">
          <span>{schedule?.title}</span>
        </p>
        <h3>{schedule?.task?.name}</h3>
        <p>{schedule?.task?.description}</p>
        <ScheduleTable scheduleDetail={schedule?.scheduleDetail} />
      </div>
    </div>
  );
}
