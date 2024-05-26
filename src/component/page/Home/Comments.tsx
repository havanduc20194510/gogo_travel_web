/* eslint-disable @next/next/no-img-element */
"use client";

import { Review } from "@/models/review/get";
import { getTopTourReview } from "@/service/review";
import { useCallback, useEffect, useState } from "react";

export default function Comments() {
  const [reviewList, setReviewList] = useState<Review[]>();

  const getReviewList = useCallback(async () => {
    try {
      const res = await getTopTourReview();
      setReviewList(res.data);
    } catch {
      //Do nothing
    }
  }, []);

  useEffect(() => {
    getReviewList();
  }, [getReviewList]);

  return (
    <div className="bg-white dark:bg-gray-800 py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="text-center mb-12">
          <b className="text-emerald-700 text-lg">Đánh giá</b>
          <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
            Mọi người nghĩ gì?
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {reviewList?.map((review, index) => (
            <div
              key={index}
              className="max-w-lg w-full mx-auto border px-6 py-4 rounded-lg"
            >
              <div className="flex items-center">
                <img
                  src="/avatar.avif"
                  alt="Avatar"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="text-lg font-medium text-gray-800">
                    {review.userName}
                  </div>
                </div>
              </div>
              <div className="text-yellow-500">
                {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
              </div>
              <p className="text-lg leading-relaxed mb-6">{review.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
