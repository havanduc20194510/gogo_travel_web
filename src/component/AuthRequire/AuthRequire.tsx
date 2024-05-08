"use client";

import {
  deleteFromLocalStorage,
  getFromLocalStorage,
} from "@/utils/localStorage";
import { FC, ReactNode, useCallback, useEffect } from "react";
import { tokenCheck } from "@/service/user";
import { useRouter } from "next/navigation";

type Props = {
  children: ReactNode;
};

export const AuthRequire: FC<Props> = async ({ children }) => {
  const router = useRouter();

  const authCheck = useCallback(async () => {
    try {
      const token: string | undefined = getFromLocalStorage("token");
      await tokenCheck({ token: token ?? "" });
    } catch {
      deleteFromLocalStorage("user");
      deleteFromLocalStorage("token");
      router.push("/login");
    }
  }, [router]);

  useEffect(() => {
    authCheck();
  }, [authCheck]);

  return <>{children}</>;
};
