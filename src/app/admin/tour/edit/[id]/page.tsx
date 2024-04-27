"use client";

import React, { FC, useCallback, useEffect, useState } from "react";
import { LayoutAdmin } from "@/component/page/admin/LayoutAdmin";
import TourForm from "@/component/page/admin/Tour/Form";
import { TourResponse } from "@/models/tour/get";
import { getTour } from "@/service/tour";
import { useParams } from "next/navigation";
import { Spin } from "antd";

const Page: FC = () => {
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
    return <Spin tip="Loading..." />;
  }

  return (
    <LayoutAdmin>
      <TourForm isEdit tour={tourResponse?.data} />
    </LayoutAdmin>
  );
};

export default Page;
