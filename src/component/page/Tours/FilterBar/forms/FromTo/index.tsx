"use client";

import FormHeading from "../FormHeading";
import { Input } from "antd";

type Props = {
  onChange: (fieldName: string, value: string) => void;
};

export default function FromTo({ onChange }: Props) {
  return (
    <FormHeading title="Giá">
      <div className="flex flex-col gap-3">
        <div>
          Từ:
          <Input
            type="number"
            size="large"
            onChange={(event) => onChange("filterPriceMin", event.target.value)}
          />
        </div>
        <div>
          Đến:
          <Input
            type="number"
            size="large"
            onChange={(event) => onChange("filterPriceMax", event.target.value)}
          />
        </div>
      </div>
    </FormHeading>
  );
}
