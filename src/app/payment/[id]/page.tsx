"use client";

import Footer from "@/component/layout/Footer";
import Navbar from "@/component/layout/Navbar";
import PaymentForm from "@/component/page/Payment/PaymentForm";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <Navbar />
      <div className="py-20 content">
        <PaymentForm />
      </div>
      <Footer />
    </Suspense>
  );
}
