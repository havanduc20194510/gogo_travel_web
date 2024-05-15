"use client";

import TabContent from "@/component/ui/TabContent";
import Banner from "../Home/Banner";
import { useCallback, useEffect, useState } from "react";
import { TourResponse } from "@/models/tour/get";
import { getTour, increaseView } from "@/service/tour";
import { Spin } from "antd";
import { useParams } from "next/navigation";
import Schedule from "./Schedule";
import Plan from "./Plan";
import { AuthRequire } from "@/component/AuthRequire/AuthRequire";

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

  useEffect(() => {
    increaseView(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spin tip="Loading..." />
      </div>
    );
  }

  if (!tourResponse?.data) {
    return null;
  }

  const tabs = [
    {
      title: "Chương trình tour",
      content: <Plan tour={tourResponse.data} />,
      iconUrl: "/icons/info.svg",
    },
    {
      title: "Lịch trình",
      content: <Schedule tour={tourResponse.data} />,
      iconUrl: "/icons/calendar.svg",
    },
  ];

  return (
    <AuthRequire>
      <Banner />
      <div className="content">
        <TabContent tabs={tabs} />
      </div>
    </AuthRequire>
  );
}
