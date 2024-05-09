/* eslint-disable @next/next/no-img-element */
"use client";

type Props = {
  totalView: number;
};

export const View = ({ totalView }: Props) => {
  return (
    <div className="flex items-center gap-1 absolute top-1 right-1 p-1 rounded-lg font-bold opacity-70 bg-white">
      <span>{totalView}</span>
      <img
        style={{
          width: "30px",
          height: "30px",
        }}
        src="/icons/view.svg"
        alt=""
      />
    </div>
  );
};
