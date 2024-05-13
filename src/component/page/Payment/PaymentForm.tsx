/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useState } from "react";
import { PaymentRequest } from "@/models/payment/payment";

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [language, setLanguage] = useState("vi");

  const methods = [
    {
      label: "Cổng thanh toán VNPAYQR",
      value: "",
    },
    {
      label: "Thanh toán qua ATM-Tài khoản ngân hàng nội địa",
      value: "VNBANK",
    },
    {
      label: "Thanh toán qua thẻ quốc tế",
      value: "INTCARD",
    },
  ];

  const handleSubmit = useCallback(async () => {
    const request: PaymentRequest = {
      amount: 1000000,
      bankCode: paymentMethod,
      locale: language,
    };

    // window.location.href = res.data;
  }, [language, paymentMethod]);

  return (
    <div className="max-w-xl mx-auto p-5 bg-white shadow-md rounded-lg text-xl">
      <div className="text-center">
        <img
          src="vnpay-logo.jpeg"
          alt="VNPAY Logo"
          width={200}
          height={50}
          className="mx-auto"
        />
      </div>
      <h2 className="text-xl font-bold mb-4 mt-4">
        Chọn Phương thức thanh toán:
      </h2>
      <div className="space-y-2">
        {methods.map((item, index) => (
          <label key={index} className="flex items-center space-x-2">
            <input
              type="radio"
              name="paymentMethod"
              value={item.value}
              checked={paymentMethod === item.value}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="form-radio h-4 w-4"
            />
            <span>{item.label}</span>
          </label>
        ))}
      </div>
      <h2 className="text-xl font-bold mt-6 mb-4">Ngôn ngữ:</h2>
      <div className="flex items-center space-x-4">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="language"
            value="vi"
            checked={language === "vi"}
            onChange={() => setLanguage("vi")}
            className="form-radio h-4 w-4"
          />
          <span>Tiếng Việt</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="language"
            value="en"
            checked={language === "en"}
            onChange={() => setLanguage("en")}
            className="form-radio h-4 w-4"
          />
          <span>Tiếng Anh</span>
        </label>
      </div>
      <button
        className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSubmit}
      >
        Thanh toán
      </button>
    </div>
  );
};

export default PaymentForm;
