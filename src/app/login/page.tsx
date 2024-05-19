"use client";
import { Suspense } from "react";

import Login from "@/component/page/auth/Login";
import { AuthRequire } from "@/component/AuthRequire/AuthRequire";

export default function Page() {
  return (
    <Suspense>
      <AuthRequire>
        <Login />
      </AuthRequire>
    </Suspense>
  );
}
