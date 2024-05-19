"use client";

import { AuthRequire } from "@/component/AuthRequire/AuthRequire";
import Footer from "@/component/layout/Footer";
import Navbar from "@/component/layout/Navbar";
import Suggest from "@/component/page/Suggest";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <AuthRequire>
        <Navbar />
        <Suggest />
        <Footer />
      </AuthRequire>
    </Suspense>
  );
}
