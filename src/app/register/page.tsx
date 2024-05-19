"use client";

import { AuthRequire } from "@/component/AuthRequire/AuthRequire";
import Register from "@/component/page/auth/Register";

export default function Page() {
  return (
    <AuthRequire>
      <Register />
    </AuthRequire>
  );
}
