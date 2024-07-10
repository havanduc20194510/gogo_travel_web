/* eslint-disable @next/next/no-img-element */
"use client";

import { View } from "@/component/ui/View";
import { AverageRating } from "@/models/review/get";
import { Tour } from "@/models/tour/get";
import { getTourAverageRating } from "@/service/review";
import { formatPrice } from "@/utils/price";
import Link from "next/link";
import { useState, useCallback, useEffect } from "react";
import ColorStar from "../../TourDetail/Review/ColorStar";

type Props = {
  tour: Tour;
  colSpan?: string;
};

export default function TourItem({ tour, colSpan = "1" }: Props) {
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
    <Link
      href={`tours/${tour.tourId}`}
      className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 col-span-${colSpan}`}
    >
      <img
        src={tour.images?.[0]?.url}
        loading="lazy"
        alt="Product"
        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
      />
      <div className="relative w-full bg-black bg-opacity-40 backdrop-filter backdrop-blur-md p-3">
        <b className="text-emerald-500 text-lg">{tour.name}</b>
        <div className="flex items-center gap-3">
          <span className="font-bold text-lg text-white">
            {formatPrice(tour.adultPrice)}
          </span>
          <div className="flex items-center">
            {!!averageRating?.averageRating && (
              <ColorStar
                rating={averageRating?.averageRating}
                activeClassname="fill-yellow-400 text-yellow-400 h-5 w-5"
                nonActiveClassname="fill-gray-300 text-gray-300 h-5 w-5"
              />
            )}
          </div>
        </div>
      </div>
      {/* <View totalView={tour.totalView} /> */}
    </Link>
  );
}
