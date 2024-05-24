/* eslint-disable @next/next/no-img-element */
"use client";

import { Place } from "@/models/place/get";
import Card from "./Card";
import { Spin } from "antd";

type Props = {
  placeList?: Place[];
  loading: boolean;
};

export default function SpecialList({ placeList, loading }: Props) {
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spin tip="Loading..." />
      </div>
    );
  }

  if (!placeList?.length) {
    return <p className="text-xl font-bold">Không tìm thấy kết quả nào</p>;
  }

  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <button
          type="button"
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium bg-emerald-600 focus:outline-none text-white rounded-full border border-emerald-600 hover:bg-emerald-500 focus:z-10 focus:ring-4 focus:ring-gray-100 "
        >
          Places
        </button>
        <div className="flex items-center gap-2">
          <button className="flex items-center justify-center w-10 h-10 bg-emerald-600 rounded-full text-white shadow-xl">
            <img src="/icons/arrow-left.svg" alt="" />
          </button>
          <button className="flex items-center justify-center w-10 h-10 bg-emerald-600 rounded-full text-white shadow-xl">
            <img src="/icons/arrow-right.svg" alt="" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6 xl:gap-6">
        {placeList?.map((place) => (
          <Card key={place.id} place={place} />
        ))}
      </div>
    </>
  );
}
