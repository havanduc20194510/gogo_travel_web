"use client";

import { User } from "@/models/user/login";
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
      const user: User | undefined = getFromLocalStorage("user");
      await tokenCheck({ token: user?.token ?? "" });
    } catch {
      deleteFromLocalStorage("user");
      router.push("/login");
    }
  }, [router]);

  useEffect(() => {
    authCheck();
  }, [authCheck]);

  return <>{children}</>;
};
