/* eslint-disable @next/next/no-img-element */
"use client";

import Footer from "@/component/layout/Footer";
import Navbar from "@/component/layout/Navbar";
import { useMemo, useState } from "react";
import { Tab } from "./Tab";
import { BookingHistory } from "./BookingHistory";
import { AuthRequire } from "@/component/AuthRequire/AuthRequire";
import { UserInfo } from "./UserInfo";
import { User } from "@/models/user/get";
import { PaymentList } from "./PaymentList";

export type NotificationType = "success" | "info" | "warning" | "error";

export default function Profile() {
  const [userInfo, setUserInfo] = useState<User | undefined>();
  const [tab, setTab] = useState("info");

  const content = useMemo(() => {
    if (tab === "info") {
      return <UserInfo userInfo={userInfo} onChangeUserInfo={setUserInfo} />;
    }

    if (tab === "payment") {
      return <PaymentList userId={userInfo?.id} />;
    }

    return <BookingHistory />;
  }, [tab, userInfo]);

  return (
    <AuthRequire>
      <Navbar />
      <div className="py-24 content2">
        <div className="w-full col-span-3">
          <Tab tab={tab} onChangeTab={setTab} />
          {content}
        </div>
      </div>
      <Footer />
    </AuthRequire>
  );
}
