/* eslint-disable @next/next/no-img-element */
"use client";

import Form from "./Form";
import Steps from "./Steps";

export default function TourPlan() {
  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="col-span-3">
        <Steps />
      </div>
      <div className="col-span-2">
        <Form />
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}
