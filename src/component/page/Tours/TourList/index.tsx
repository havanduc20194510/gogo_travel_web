/* eslint-disable @next/next/no-img-element */
"use client";

import { Tour } from "@/models/tour/get";
import { Image } from "antd";
import TourItem from "../../domain/TourItem";

type Props = {
  tourList?: Tour[];
};

export default function TourList({ tourList }: Props) {
  if (!tourList?.length) {
    return <h1 className="font-bold text-xl">Không tìm thấy tour phù hợp</h1>;
  }

  return (
    <>
      <ul className="grid grid-cols-1 gap-y-3 items-start">
        {tourList.map((tour) => {
          return <TourItem key={tour.tourId} tour={tour} />;
        })}
      </ul>
      <div className="flex items-center justify-center mt-5">
        <button
          type="button"
          className="py-2.5 px-5 me-2 mb-2 w-full text-sm font-medium text-emerald-600 focus:outline-none bg-white rounded-full border border-emerald-600 hover:bg-emerald-500 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 "
        >
          Load more
        </button>
      </div>
    </>
  );
}
