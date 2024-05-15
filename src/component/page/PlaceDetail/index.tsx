"use client";

import { useCallback, useEffect, useState } from "react";
import { Spin } from "antd";
import { useParams } from "next/navigation";
import { getPlaceById, increaseViewPlace } from "@/service/place";
import { GetPlaceDetailResponse } from "@/models/place/get";
import Slide from "./Slide";

export default function PlaceDetail() {
  const [placeResponse, setPlaceResponse] = useState<GetPlaceDetailResponse>();
  const param = useParams();
  const [loading, setLoading] = useState(false);

  const id = typeof param.id === "string" ? param.id : "";

  const loadPlace = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getPlaceById(id);
      setPlaceResponse(response);
    } catch {
      //Do nothing
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    loadPlace();
  }, [loadPlace]);

  useEffect(() => {
    increaseViewPlace(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spin tip="Loading..." />
      </div>
    );
  }

  if (!placeResponse?.data) {
    return null;
  }

  const place = placeResponse.data;

  return (
    <div className="content">
      <div className="py-24">
        <h1 className=" font-bold text-2xl">{place.name}</h1>
        <Slide images={place.images} />
        <h1 className="text-xl font-bold my-5">Địa điểm</h1>
        <p>{place.address}</p>
        <h1 className="text-xl font-bold my-5">Các hoạt động</h1>
        <p>{place.activities}</p>
        <h1 className="text-xl font-bold my-5">Mô tả</h1>
        <p>{place.description}</p>
        <h1 className="text-xl font-bold my-5">Lưu ý</h1>
        <p>{place.note}</p>
        <ul className="list-disc ml-10">
          <li>Thời gian mở: {place.timeOpen}</li>
          <li>Thời gian đóng: {place.timeClose}</li>
        </ul>
      </div>
    </div>
  );
}
