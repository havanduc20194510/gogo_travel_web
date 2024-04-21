"use client";

import Step from "./Step";

export default function Steps() {
  return (
    <div className="p-4 max-w-xl mx-auto ">
      <h2 className="mb-8 text-2xl font-bold">Tour plan</h2>
      <Step />
      <Step />
      <Step />
    </div>
  );
}
