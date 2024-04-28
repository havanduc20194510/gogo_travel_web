/* eslint-disable @next/next/no-img-element */
"use client";

import { Tour } from "@/models/tour/get";
import { Image } from "antd";

type Props = {
  tourList?: Tour[];
};

export default function TourList({ tourList }: Props) {
  if (!tourList?.length) {
    return null;
  }

  return (
    <>
      <ul className="grid grid-cols-1 gap-y-3 items-start">
        {tourList.map((tour) => {
          return (
            <li
              key={tour.tourId}
              className="relative flex flex-row items-center bg-white rounded-md py-2"
            >
              <div className="order-1 ml-6 ">
                <div className="flex items-center width-full gap-5">
                  <button className="rounded-2xl bg-emerald-600 text-sm px-4 py-1 leading-none text-white">
                    {tour.status}
                  </button>
                  <span className="text-gray-300">|</span>
                  <div className="flex items-center">
                    {Array.from({ length: tour.hotelStar }).map((_, index) => (
                      <img
                        key={index}
                        width={20}
                        height={20}
                        src="/icons/star.svg"
                        alt=""
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">(584 reviews)</span>
                </div>
                <h3 className="my-3 text-slate-900 font-semibold text-lg">
                  {tour.name}
                </h3>

                <div className="flex items-center gap-2 text-gray-500">
                  <img src="/icons/clock.svg" alt="" />
                  <span>|</span>
                  <span>{tour.numberOfDays} days</span>
                  <span>|</span>
                  <img src="/icons/car.svg" alt="" />
                  <span>{tour.vehicle}</span>
                  <span>|</span>
                  <img src="/icons/family.svg" alt="" />
                  <span>Family Plan</span>
                </div>
              </div>
              <Image
                src={tour.images?.[0]?.url ?? ""}
                alt=""
                className="mb-6 shadow-md rounded-lg bg-slate-50  sm:mb-0"
                width={150}
              />
            </li>
          );
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
