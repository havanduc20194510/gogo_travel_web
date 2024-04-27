"use client";

import TabContent from "@/component/ui/TabContent";
import Banner from "../Home/Banner";
import { useCallback, useEffect, useState } from "react";
import { TourResponse } from "@/models/tour/get";
import { getTour } from "@/service/tour";
import { Spin } from "antd";
import { useParams } from "next/navigation";
import Schedule from "./Schedule";

export default function TourDetail() {
  const [tourResponse, setTourResponse] = useState<TourResponse>();
  const param = useParams();
  const [loading, setLoading] = useState(false);

  const id = typeof param.id === "string" ? param.id : "";

  const loadTour = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getTour(id);
      setTourResponse(response);
    } catch {
      //Do nothing
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    loadTour();
  }, [loadTour]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spin tip="Loading..." />
      </div>
    );
  }

  const tabs = [
    {
      title: "Chương trình tour",
      content: <>Plan</>,
      iconUrl: "/icons/info.svg",
    },
    {
      title: "Lịch trình",
      content: <Schedule tour={tourResponse?.data} />,
      iconUrl: "/icons/calendar.svg",
    },
    {
      title: "Khởi hành",
      content: <div>This is content for Tab 3</div>,
      iconUrl: "/icons/map.svg",
    },
    {
      title: "Bảng giá",
      content: <div>This is content for Tab 4</div>,
      iconUrl: "/icons/price.svg",
    },
  ];

  return (
    <>
      <Banner />
      <div className="content">
        <TabContent tabs={tabs} />
      </div>
    </>
  );
}
