/* eslint-disable @next/next/no-img-element */
"use client";
import { User } from "@/models/user/login";
import {
  deleteFromLocalStorage,
  getFromLocalStorage,
} from "@/utils/localStorage";
import { FC, useCallback, useEffect } from "react";
import { tokenCheck } from "@/service/user";
import { useRouter } from "next/navigation";
import { Props } from "./AuthRequire";

export const AuthRequire: FC<Props> = async ({ children }) => {
  const router = useRouter();
  const authCheck = useCallback(async () => {
    try {
      const user: User | undefined = getFromLocalStorage("user");
      await tokenCheck({ token: user?.token ?? "" });
    } catch {
      deleteFromLocalStorage("user");
      router.push("/");
    }
  }, [router]);
  useEffect(() => {
    authCheck();
  }, []);

  return <>{children}</>;
};
