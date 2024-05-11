"use client";

import Map from "@/component/page/Map";
import { useParams, useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function Page() {
  const searchParams = useSearchParams();
  const address = searchParams.get("address") ?? undefined;

  return (
    <Suspense>
      <Map address={address} />
    </Suspense>
  );
}
