/* eslint-disable @next/next/no-img-element */
"use client";

import { Tour } from "@/models/tour/get";
import Form from "./Form";
import Steps from "./Steps";

type Props = {
  tour?: Tour;
};

export default function Schedule({ tour }: Props) {
  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="col-span-3">
        <Steps tour={tour} />
      </div>
      <div className="col-span-2">
        <Form />
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}
