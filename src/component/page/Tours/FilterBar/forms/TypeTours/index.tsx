"use client";

import { useCallback, useEffect, useState } from "react";
import FormHeading from "../FormHeading";
import { Input, Select } from "antd";
import { getTourTypes } from "@/service/tourType";
import { TourType } from "@/models/tourType/get";

type Props = {
  onChange: (fieldName: string, value: string) => void;
};

export default function TypeTours({ onChange }: Props) {
  const [tourTypeList, setTourTypeList] = useState<TourType[]>([]);

  const loadTourType = useCallback(async () => {
    const res = await getTourTypes();
    setTourTypeList(res.data);
  }, []);

  useEffect(() => {
    loadTourType();
  }, [loadTourType]);

  return (
    <FormHeading title="Loại tour">
      <Select
        size="large"
        style={{ width: "100%" }}
        onChange={(value) => onChange("filterType", value)}
        options={tourTypeList.map((tourType) => ({
          label: tourType.name,
          value: tourType.name,
        }))}
      />
    </FormHeading>
  );
}
