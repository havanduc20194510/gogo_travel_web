"use client";
import { Suspense } from "react";

import Login from "@/component/page/auth/Login";

export default function Page() {
  return (
    <Suspense>
      <Login />
    </Suspense>
  );
}
