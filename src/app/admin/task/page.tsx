import React, { FC, Suspense } from "react";
import { LayoutAdmin } from "@/component/page/admin/LayoutAdmin";
import TaskList from "@/component/page/admin/Task";

const Home: FC = () => {
  return (
    <Suspense>
      <LayoutAdmin>
        <TaskList />
      </LayoutAdmin>
    </Suspense>
  );
};

export default Home;
