/* eslint-disable @next/next/no-img-element */
"use client";

import { Tour } from "@/models/tour/get";
import Form from "../Form";
import Steps from "./Steps";
import { getFromLocalStorage } from "@/utils/localStorage";
import { User } from "@/models/booking/get";
import ReviewList from "../Review/ReviewList";
import ReviewForm from "../Review/ReviewForm";
import { Review } from "@/models/review/get";

type Props = {
  tour?: Tour;
  onReviewSubmit: (review: {
    content: string;
    rating: number;
  }) => Promise<void>;
  reviews: Review[];
};

export default function Schedule({ tour, reviews, onReviewSubmit }: Props) {
  const user: User | undefined = getFromLocalStorage("user");

  if (!tour) {
    return null;
  }

  if (!tour.schedules?.length) {
    return <p className="font-bold text-xl">Chưa có lịch trình</p>;
  }

  return (
    <>
      <div
        className={`grid ${
          user?.roles?.includes("USER") ? "grid-cols-5" : "grid-cols-1"
        }  gap-4`}
      >
        <div
          className={`${
            user?.roles?.includes("USER") ? "col-span-3" : "col-span-5"
          }`}
        >
          <Steps tour={tour} />
        </div>
        {user?.roles?.includes("USER") && (
          <div className="col-span-2">
            <Form tour={tour} />
            <img src="/bg.png" alt="" />
          </div>
        )}
      </div>
      <ReviewList reviews={reviews} />
      <ReviewForm onSubmit={onReviewSubmit} />
    </>
  );
}
