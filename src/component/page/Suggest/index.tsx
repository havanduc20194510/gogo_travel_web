"use client";

import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Spin } from "antd";
import SpecialList from "./SpecialList";
import { getPlace, searchPlaces } from "@/service/place";
import { Place } from "@/models/place/get";
import { SearchBar } from "./SearchBar";
import { SearchPlaceRequest } from "@/models/place/search";

export default function Suggest() {
  const [loading, setLoading] = useState(false);
  const [placeList, setPlaceList] = useState<Place[]>();
  const [formData, setFormData] = useState<SearchPlaceRequest>({
    name: "",
    address: "",
    activities: "",
  });

  const getPlaces = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getPlace();
      setPlaceList(res.data);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value, name } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    },
    [formData]
  );

  const handleSubmit = useCallback(async () => {
    try {
      setLoading(true);
      const res = await searchPlaces(formData);
      setPlaceList(res.data);
    } finally {
      setLoading(false);
    }
  }, [formData]);

  useEffect(() => {
    getPlaces();
  }, [getPlaces]);

  return (
    <div className="content py-36">
      <SearchBar onChange={handleChange} onSubmit={handleSubmit} />
      <SpecialList placeList={placeList} loading={loading} />
    </div>
  );
}
