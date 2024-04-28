"use client";

import React, { FC } from "react";
import { LayoutAdmin } from "@/component/page/admin/LayoutAdmin";
import Users from "@/component/page/admin/User";

const Home: FC = () => {
  return (
    <LayoutAdmin>
      <Users />
    </LayoutAdmin>
  );
};

export default Home;
