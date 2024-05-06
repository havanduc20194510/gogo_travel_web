/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ScheduleDetail } from "@/models/tour/get";

type Props = {
  scheduleDetail?: ScheduleDetail[];
};

const Detail: React.FC<Props> = ({ scheduleDetail }) => {
  return (
    <>
      {!!scheduleDetail?.length && (
        <div className="my-2 gap-3">
          <div className="flex items-center gap-3 my-3">
            <img src="/icons/detail.svg" className="w-[20px] h-[20px]" alt="" />
            <div className=" font-bold text-gray-500">Schedule detail:</div>
          </div>
          <table className="table-auto">
            <thead>
              <tr>
                <th className="border bg-slate-200 px-4 py-2">Place</th>
                <th className="border bg-slate-200 px-4 py-2">TimeLine</th>
                <th className="border bg-slate-200 px-4 py-2">Activity</th>
              </tr>
            </thead>
            <tbody>
              {scheduleDetail.map((detail) => (
                <tr key={detail.id}>
                  <td className="border px-4 py-2">{detail.place}</td>
                  <td className="border px-4 py-2">{detail.timeLine}</td>
                  <td className="border px-4 py-2">{detail.activity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Detail;
