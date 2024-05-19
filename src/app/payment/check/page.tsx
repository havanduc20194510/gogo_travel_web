"use client";
import { AuthRequire } from "@/component/AuthRequire/AuthRequire";
import Footer from "@/component/layout/Footer";
import Navbar from "@/component/layout/Navbar";
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
        <Navbar />
        <div className="py-20 content">
          <PaymentCheck />
        </div>
        <Footer />
      </AuthRequire>
    </Suspense>
  );
}
