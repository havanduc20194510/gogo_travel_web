"use client";

import FormHeading from "../FormHeading";
import { Input } from "antd";

type Props = {
  onChange: (fieldName: string, value: string) => void;
};

export default function TypeTours({ onChange }: Props) {
  return (
    <FormHeading title="Loại tour">
      <Input
        size="large"
        onChange={(event) => onChange("filterType", event.target.value)}
      />
    </FormHeading>
  );
}
