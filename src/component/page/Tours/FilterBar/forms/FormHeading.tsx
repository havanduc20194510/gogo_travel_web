/* eslint-disable @next/next/no-img-element */
"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
};

export default function FormHeading({ children, title }: Props) {
  return (
    <div className="p-5 bg-white shadow-2xl rounded-md">
      <div className="flex items-center justify-between border-b border-gray-300">
        <h1 className="text-md font-bold">{title}</h1>
        <img width={10} height={10} src="/icons/down.svg" alt="" />
      </div>
      <div className="py-5">{children}</div>
    </div>
  );
}
