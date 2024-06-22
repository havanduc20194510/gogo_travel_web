/* eslint-disable @next/next/no-img-element */
"use client";

import { Tour } from "@/models/tour/get";
import Slide from "./Slide";
import Form from "../Form";
import { PriceTable } from "./PriceTable";
import { AverageRating } from "@/models/review/get";
import { Rate } from "antd";
import { getFromLocalStorage } from "@/utils/localStorage";
import { User } from "@/models/booking/get";

type Props = {
  tour?: Tour;
  averageRating?: AverageRating;
};

export default function Plan({ tour, averageRating }: Props) {
  const user: User | undefined = getFromLocalStorage("user");

  if (!tour) {
    return null;
  }

  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="col-span-3">
        <h1 className="my-10 font-bold text-2xl">{tour.name}</h1>
        <div className="flex mb-5 items-center width-full gap-5">
          <button className="rounded-2xl bg-emerald-600 text-sm px-4 py-1 leading-none text-white">
            {tour.status}
          </button>
          <span className="text-gray-300">|</span>
          <div className="flex items-center">
            <Rate defaultValue={averageRating?.averageRating} disabled />
          </div>
          <span className="text-sm text-gray-500">
            ({averageRating?.totalReview} reviews)
          </span>
        </div>
        <Slide images={tour.images} />
        <h1 className="text-xl font-bold my-5">Bảng giá</h1>
        <PriceTable tour={tour} />
        <h1 className="text-xl font-bold my-5">Khởi hành</h1>
        <ul className="list-disc ml-10">
          <li>
            Thời gian:{" "}
            {tour.departureTimes?.length
              ? tour.departureTimes?.[0]?.startDate
              : "Chưa có"}
          </li>
          <li>Địa điểm: {tour.departureLocation}</li>
          <li>Cách di chuyển: {tour.vehicle}</li>
        </ul>
        <h1 className="text-xl font-bold my-5">Thông tin</h1>
        <ul className="list-disc ml-10">
          <li>Số ngày: {tour.numberOfDays}</li>
          <li>Số đêm: {tour.numberOfNights}</li>
        </ul>

        <h1 className="text-xl font-bold my-5">Mô tả</h1>
        <p>{tour.description}</p>
        <h1 className="text-xl font-bold my-5">Lưu ý</h1>
        <p>{tour.note}</p>
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
