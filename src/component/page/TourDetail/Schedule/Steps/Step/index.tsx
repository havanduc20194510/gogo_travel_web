/* eslint-disable @next/next/no-img-element */
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
        {!!schedule?.task && (
          <div className="my-2 gap-3 overflow-x-scroll w-[550px]">
            <div className="flex items-center gap-3 my-3">
              <img src="/icons/task.svg" className="w-[20px] h-[20px]" alt="" />
              <div className="font-bold text-gray-500">Task:</div>
            </div>
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="border bg-slate-200 px-4 py-2">Name</th>
                  <th className="border bg-slate-200 px-4 py-2">Description</th>
                  <th className="border bg-slate-200 px-4 py-2">Coin</th>
                  <th className="border bg-slate-200 px-4 py-2">Reward</th>
                  <th className="border bg-slate-200 px-4 py-2">Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">{schedule.task.name}</td>
                  <td className="border px-4 py-2">
                    {schedule.task.description}
                  </td>
                  <td className="border px-4 py-2">{schedule.task.coin}</td>
                  <td className="border px-4 py-2">{schedule.task.reward}</td>
                  <td className="border px-4 py-2">
                    {schedule.task.taskType.name}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        <ScheduleTable scheduleDetail={schedule?.scheduleDetail} />
      </div>
    </div>
  );
}
