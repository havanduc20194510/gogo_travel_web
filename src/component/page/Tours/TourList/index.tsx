/* eslint-disable @next/next/no-img-element */
"use client";

import { Tour } from "@/models/tour/get";
import TourItem from "../../domain/TourItem";
import { Spin } from "antd";

type Props = {
  tourList?: Tour[];
  loading: boolean;
};

export default function TourList({ tourList, loading }: Props) {
  if (!tourList?.length) {
    return <h1 className="font-bold text-xl">Không tìm thấy tour phù hợp</h1>;
  }

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spin tip="Loading..." />
      </div>
    );
  }
  return (
    <ul className="grid grid-cols-1 gap-y-3 items-start">
      {tourList.map((tour) => {
        return <TourItem key={tour.tourId} tour={tour} />;
      })}
    </ul>
  );
}
