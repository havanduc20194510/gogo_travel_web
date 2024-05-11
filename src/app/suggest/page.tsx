"use client";

import Footer from "@/component/layout/Footer";
import Navbar from "@/component/layout/Navbar";
import Suggest from "@/component/page/Suggest";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <Navbar />
      <Suggest />
      <Footer />
    </Suspense>
  );
}
