"use client";

import Footer from "@/component/layout/Footer";
import Navbar from "@/component/layout/Navbar";
import Destination from "@/component/page/Destination";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <Navbar />
      <Destination />
      <Footer />
    </Suspense>
  );
}
