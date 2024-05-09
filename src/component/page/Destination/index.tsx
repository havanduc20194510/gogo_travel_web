"use client";

import { useCallback, useEffect, useState } from "react";
import { Spin } from "antd";
import SpecialList from "./SpecialList";
import { getPlace } from "@/service/place";
import { Place } from "@/models/place/get";

export default function Destination() {
  const [loading, setLoading] = useState(false);
  const [placeList, setPlaceList] = useState<Place[]>();

  const getPlaces = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getPlace();
      setPlaceList(res.data);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getPlaces();
  }, [getPlaces]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spin tip="Loading..." />
      </div>
    );
  }

  return (
    <div className="content py-36">
      <SpecialList placeList={placeList} />
    </div>
  );
}
