"use client";

import { AuthRequire } from "@/component/AuthRequire/AuthRequire";
import Profile from "@/component/page/Profile";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <AuthRequire require>
        <Profile />
      </AuthRequire>
    </Suspense>
  );
}
