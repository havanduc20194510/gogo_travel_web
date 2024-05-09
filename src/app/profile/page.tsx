"use client";

import Profile from "@/component/page/Profile";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <Profile />
    </Suspense>
  );
}
