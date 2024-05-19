"use client";

import { AuthRequire } from "@/component/AuthRequire/AuthRequire";
import Footer from "@/component/layout/Footer";
import Navbar from "@/component/layout/Navbar";
import PlaceDetail from "@/component/page/PlaceDetail";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <AuthRequire>
        <Navbar />
        <PlaceDetail />
        <Footer />
      </AuthRequire>
    </Suspense>
  );
}
