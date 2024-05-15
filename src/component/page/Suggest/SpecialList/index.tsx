/* eslint-disable @next/next/no-img-element */
"use client";

import { PlaceSuggestion } from "@/models/place/get";
import Card from "./Card";
import { Spin } from "antd";

type Props = {
  placeList?: PlaceSuggestion[];
  loading: boolean;
};

export default function SpecialList({ placeList, loading }: Props) {
  if (loading) {
    return (
      <div className="h-[400px] flex items-center justify-center">
        <Spin tip="Loading..." />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6 xl:gap-6">
      {placeList?.map((place, index) => (
        <Card key={index} place={place} />
      ))}
    </div>
  );
}
