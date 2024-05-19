"use client";

import { AuthRequire } from "@/component/AuthRequire/AuthRequire";
import Map from "@/component/page/Map";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <AuthRequire>
        <Map />
      </AuthRequire>
    </Suspense>
  );
}
