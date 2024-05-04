"use client";

import Home from "@/component/page/Home/Home";
import { SessionProvider } from "next-auth/react";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <Home />
    </Suspense>
  );
}
