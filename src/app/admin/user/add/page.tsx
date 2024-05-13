"use client";

import React, { FC } from "react";
import { LayoutAdmin } from "@/component/page/admin/LayoutAdmin";
import UserForm from "@/component/page/admin/User/Form";

const Page: FC = () => {
  return (
    <LayoutAdmin>
      <UserForm />
    </LayoutAdmin>
  );
};

export default Page;
