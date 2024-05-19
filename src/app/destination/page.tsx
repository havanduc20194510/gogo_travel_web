"use client";

import { AuthRequire } from "@/component/AuthRequire/AuthRequire";
import Footer from "@/component/layout/Footer";
import Navbar from "@/component/layout/Navbar";
import Destination from "@/component/page/Destination";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <AuthRequire>
        <Navbar />
        <Destination />
        <Footer />
      </AuthRequire>
    </Suspense>
  );
}
