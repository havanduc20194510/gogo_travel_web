import { tokenCheck } from "@/service/user";
import {
  deleteFromLocalStorage,
  getFromLocalStorage,
} from "@/utils/localStorage";
import { useRouter } from "next/router";
import { useCallback } from "react";

export const useAuth = () => {
  const router = useRouter();
  const check = useCallback(async () => {
    try {
      const token: string | undefined = getFromLocalStorage("token");
      await tokenCheck({ token: token ?? "" });
    } catch {
      deleteFromLocalStorage("user");
      deleteFromLocalStorage("token");
      router.push("/login");
    }
  }, [router]);
  return check;
};
