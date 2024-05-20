"use client";

import { AuthRequire } from "@/component/AuthRequire/AuthRequire";
import Home from "@/component/page/Home/Home";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <AuthRequire>
        <Home />
      </AuthRequire>
    </Suspense>
  );
}
