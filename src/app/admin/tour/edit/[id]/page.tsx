"use client";

import React, { FC, useCallback, useEffect, useState } from "react";
import { LayoutAdmin } from "@/component/page/admin/LayoutAdmin";
import TourForm from "@/component/page/admin/Tour/Form";
import { TourResponse } from "@/models/tour/get";
import { getTour } from "@/service/tour";
import { useParams } from "next/navigation";
import { Spin } from "antd";

const Page: FC = () => {
  return (
    <LayoutAdmin>
      <TourForm />
    </LayoutAdmin>
  );
};

export default Page;
