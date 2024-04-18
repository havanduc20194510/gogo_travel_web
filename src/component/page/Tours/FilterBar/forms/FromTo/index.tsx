"use client";

import { DatePicker } from "@/component/ui/Datepicker";
import FormHeading from "../FormHeading";

export default function FromTo() {
  return (
    <FormHeading title="Khoảng thời gian">
      <div className="flex flex-col gap-3">
        <b>From</b>
        <DatePicker defaultDate={new Date()} />
        <b>To</b>
        <DatePicker defaultDate={new Date()} />
        <button className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded">
          Lọc
        </button>
      </div>
    </FormHeading>
  );
}
