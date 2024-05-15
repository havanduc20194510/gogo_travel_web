"use client";

import Footer from "@/component/layout/Footer";
import Navbar from "@/component/layout/Navbar";
import PlaceDetail from "@/component/page/PlaceDetail";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <Navbar />
      <PlaceDetail />
      <Footer />
    </Suspense>
  );
}
