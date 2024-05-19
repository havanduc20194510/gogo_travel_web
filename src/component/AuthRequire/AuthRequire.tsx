"use client";

import {
  deleteFromLocalStorage,
  getFromLocalStorage,
} from "@/utils/localStorage";
import { FC, ReactNode, useCallback, useEffect } from "react";
import { tokenCheck } from "@/service/user";
import { useRouter } from "next/navigation";
import { User } from "@/models/user/get";

type Props = {
  children: ReactNode;
  role?: string;
  require?: boolean;
};

export const AuthRequire: FC<Props> = async ({ children, role, require }) => {
  const router = useRouter();

  const authCheck = useCallback(async () => {
    try {
      const token: string | undefined = getFromLocalStorage("token");
      const user: User | undefined = getFromLocalStorage("user");
      const res = await tokenCheck({ token: token ?? "" });

      if (role && !user?.roles?.includes(role)) {
        router.push("/");
      }
    } catch {
      deleteFromLocalStorage("user");
      deleteFromLocalStorage("token");
      if (require) {
        router.push("/login");
      }
    }
  }, [require, role, router]);

  useEffect(() => {
    authCheck();
  }, [authCheck]);

  return <>{children}</>;
};
