"use client";

import { DatePicker } from "@/component/ui/Datepicker";
import FormHeading from "../FormHeading";

export default function FromTo() {
  return (
    <FormHeading title="Ngày bắt đầu">
      <div className="flex flex-col gap-3">
        <DatePicker defaultDate={new Date()} />
      </div>
    </FormHeading>
  );
}
