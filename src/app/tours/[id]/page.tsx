"use client";

import { AuthRequire } from "@/component/AuthRequire/AuthRequire";
import Footer from "@/component/layout/Footer";
import Navbar from "@/component/layout/Navbar";
import TourDetail from "@/component/page/TourDetail";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <AuthRequire>
        <Navbar />
        <TourDetail />
        <Footer />
      </AuthRequire>
    </Suspense>
  );
}
