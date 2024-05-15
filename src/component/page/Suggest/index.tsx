"use client";

import { ChangeEvent, useCallback, useEffect, useState } from "react";
import SpecialList from "./SpecialList";
import { getPlace, placeSuggestion, searchPlaces } from "@/service/place";
import {
  GetPlaceSuggestionRequest,
  Place,
  PlaceSuggestion,
} from "@/models/place/get";
import { SearchBar } from "./SearchBar";

export default function Suggest() {
  const [loading, setLoading] = useState(false);
  const [placeList, setPlaceList] = useState<PlaceSuggestion[]>();
  const [formData, setFormData] = useState<GetPlaceSuggestionRequest>({
    time: "",
    location: "",
    activity: "",
  });

  const handleSubmit = useCallback(async () => {
    try {
      setLoading(true);
      const res = await placeSuggestion(formData);
      setPlaceList(res.data);
    } finally {
      setLoading(false);
    }
  }, [formData]);

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

  return (
    <div className="content py-36">
      <SearchBar onChange={handleChange} onSubmit={handleSubmit} />
      <SpecialList placeList={placeList} loading={loading} />
    </div>
  );
}
