import React from "react";
import { toast, ToastContainer, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ToastType = "success" | "error" | "warning" | "info";

interface ShowToastParams extends ToastOptions {
  message: string;
  type?: ToastType;
}

const showToast = ({ message, type = "success" }: ShowToastParams): void => {
  switch (type) {
    case "success":
      toast.success(message, {
        position: "top-right",
      });
      break;
    case "error":
      toast.error(message, {
        position: "top-right",
      });
      break;
    case "warning":
      toast.warning(message, {
        position: "top-right",
      });
      break;
    case "info":
      toast.info(message, {
        position: "top-right",
      });
      break;
    default:
      toast(message, {
        position: "top-right",
      });
  }
};

const Toast: React.FC = () => {
  return <ToastContainer />;
};

export { showToast, Toast };
