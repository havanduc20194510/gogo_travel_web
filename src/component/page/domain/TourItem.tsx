/* eslint-disable @next/next/no-img-element */
"use client";

import { AverageRating } from "@/models/review/get";
import { Tour } from "@/models/tour/get";
import { getTourAverageRating } from "@/service/review";
import { formatPrice } from "@/utils/price";
import { Image } from "antd";
import Link from "next/link";
import { useState, useCallback, useEffect } from "react";
import ColorStar from "./../TourDetail/Review/ColorStar";

type Props = {
  tour: Tour;
};

export default function TourItem({ tour }: Props) {
  const [averageRating, setAverageRating] = useState<AverageRating>();

  const loadAverageRating = useCallback(async () => {
    try {
      const averageRatingRes = await getTourAverageRating(tour.tourId);
      setAverageRating(averageRatingRes.data);
    } catch {
      //Do nothing
    }
  }, [tour.tourId]);

  useEffect(() => {
    loadAverageRating();
  }, [loadAverageRating]);

  return (
    <Link href={`tours/${tour.tourId}`}>
      <li
        key={tour.tourId}
        className="relative flex flex-row items-center bg-white rounded-md py-2"
      >
        <div className="order-1 ml-6 ">
          <div className="flex items-center width-full gap-5">
            <button className="rounded-2xl bg-emerald-600 text-sm px-4 py-1 leading-none text-white">
              {tour.status}
            </button>
            {!!averageRating?.averageRating && (
              <span className="text-gray-300">|</span>
            )}
            <div className="flex items-center">
              {!!averageRating?.averageRating && (
                <ColorStar
                  rating={averageRating?.averageRating}
                  activeClassname="fill-yellow-400 text-yellow-400 h-5 w-5"
                  nonActiveClassname="fill-gray-300 text-gray-300 h-5 w-5"
                />
              )}
            </div>

            {!!averageRating?.totalReview && (
              <span className="text-sm text-gray-500">
                ({averageRating?.totalReview} reviews)
              </span>
            )}
          </div>
          <h3 className="my-3 text-slate-900 font-semibold text-lg">
            {tour.name}
          </h3>

          <div className="flex items-center gap-2 text-gray-500">
            <img src="/icons/clock.svg" alt="" />
            <span>|</span>
            <span>{tour.numberOfDays} days</span>
            <span>|</span>
            <img src="/icons/car.svg" alt="" />
            <span>{tour.vehicle}</span>
            <span>|</span>
            <img src="/icons/family.svg" alt="" />
            <span>Family Plan</span>
          </div>

          <ul className="flex items-center gap-4 text-gray-500 mt-4">
            <li>Người lớn: {formatPrice(tour.adultPrice)}</li>
            <li>Trẻ em: {formatPrice(tour.childPrice)}</li>
            <li>Em bé: {formatPrice(tour.babyPrice)}</li>
          </ul>
        </div>
        <Image
          src={tour.images?.[0]?.url ?? ""}
          alt=""
          className="mb-6 shadow-md rounded-lg bg-slate-50  sm:mb-0"
          width={150}
          preview={false}
        />
      </li>
    </Link>
  );
}
