"use client";

import Map from "@/component/page/Map";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <Map />
    </Suspense>
  );
}
