/* eslint-disable @next/next/no-img-element */
"use client";

import { paymentCheck } from "@/service/payment";
import { formatPrice } from "@/utils/price";
import React, { useCallback, useEffect, useState } from "react";

interface QueryParams {
  [key: string]: string;
}

const PaymentCheck = () => {
  const [isSuccess, setIsSuccess] = useState(true);

  const queryToObject = (): QueryParams | undefined => {
    if (typeof window !== "undefined") {
      const url = window.location.href;
      const urlObj = new URL(url);

      const queryString = urlObj.search;

      const params = new URLSearchParams(queryString);
      const queryParams: QueryParams = {};
      params.forEach((value, key) => {
        queryParams[key] = value;
      });
      return queryParams;
    }
    return undefined;
  };

  const queryParams = queryToObject();

  const check = useCallback(async () => {
    try {
      if (queryParams) {
        await paymentCheck(queryParams);
      }
      setIsSuccess(true);
    } catch {
      setIsSuccess(false);
    }
  }, [queryParams]);

  useEffect(() => {
    check();
  }, [check]);

  if (!queryParams) {
    return null;
  }

  return (
    <div className="flex items-center justify-center py-36 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div
          className={`flex items-center m-auto justify-center h-20 w-20 rounded-full mb-6 ${
            isSuccess ? "bg-green-100" : "bg-red-100"
          }`}
        >
          {isSuccess ? (
            <svg
              className="h-12 w-12 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <svg
              className="h-12 w-12 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
        <h1 className="text-3xl font-bold text-center mb-4">
          {isSuccess ? "Giao dịch thành công" : "Giao dịch thất bại"}
        </h1>
        <p className="text-center text-gray-700 mb-2">
          Mã giao dịch: {queryParams?.vnp_TransactionNo}
        </p>
        <p className="text-center text-gray-700 mb-6">
          Số tiền: {formatPrice(Number(queryParams?.vnp_Amount))}
        </p>
        <button
          className="w-full py-3 px-4 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-300"
          onClick={() => (window.location.href = "/")}
        >
          Quay lại trang chủ
        </button>
      </div>
    </div>
  );
};

export default PaymentCheck;
