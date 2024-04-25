"use client";

import React, { FC } from "react";
import { LayoutAdmin } from "@/component/page/admin/LayoutAdmin";
import Tour from "@/component/page/admin/Tour";

const Home: FC = () => {
  return (
    <LayoutAdmin>
      <Tour />
    </LayoutAdmin>
  );
};

export default Home;
