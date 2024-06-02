"use client";
import { AuthRequire } from "@/component/AuthRequire/AuthRequire";
import dynamic from "next/dynamic";
import { Suspense } from "react";

export default function Page() {
  const PaymentCheck = dynamic(
    () => import("../../../component/page/Payment/Check"),
    {
      ssr: false,
    }
  );

  return (
    <Suspense>
      <AuthRequire>
        <PaymentCheck />
      </AuthRequire>
    </Suspense>
  );
}
