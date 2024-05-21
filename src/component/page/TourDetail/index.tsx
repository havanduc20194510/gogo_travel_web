"use client";

import TabContent from "@/component/ui/TabContent";
import Banner from "../Home/Banner";
import { useCallback, useEffect, useState } from "react";
import { TourResponse } from "@/models/tour/get";
import { getTour, increaseView } from "@/service/tour";
import { Spin, message } from "antd";
import { useParams } from "next/navigation";
import Schedule from "./Schedule";
import Plan from "./Plan";
import { AuthRequire } from "@/component/AuthRequire/AuthRequire";
import ReviewForm from "./Review/ReviewForm";
import ReviewList from "./Review/ReviewList";
import {
  createTourReview,
  getTourAverageRating,
  getTourReview,
} from "@/service/review";
import { CreateTourReviewRequest } from "@/models/review/create";
import { User } from "@/models/user/get";
import { getFromLocalStorage } from "@/utils/localStorage";
import { AverageRating, Review } from "@/models/review/get";

export default function TourDetail() {
  const [tourResponse, setTourResponse] = useState<TourResponse>();
  const param = useParams();
  const [loading, setLoading] = useState(false);
  const user: User | undefined = getFromLocalStorage("user");
  const id = typeof param.id === "string" ? param.id : "";
  const [averageRating, setAverageRating] = useState<AverageRating>();

  const loadTour = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getTour(id);
      setTourResponse(response);
      const averageRatingRes = await getTourAverageRating(id);
      setAverageRating(averageRatingRes.data);
    } catch {
      //Do nothing
    } finally {
      setLoading(false);
    }
  }, [id]);

  console.log(averageRating, "averageRating");

  const [reviews, setReviews] = useState<Review[]>([]);

  const getReviews = useCallback(async () => {
    const res = await getTourReview(id);
    setReviews(res.data);
  }, [id]);

  useEffect(() => {
    getReviews();
  }, [getReviews]);

  useEffect(() => {
    loadTour();
  }, [loadTour]);

  useEffect(() => {
    increaseView(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleReviewSubmit = useCallback(
    async (review: { content: string; rating: number }) => {
      try {
        const request: CreateTourReviewRequest = {
          tourId: id,
          userId: user?.id ?? "",
          ...review,
        };

        await createTourReview(request);
        await getReviews();
      } catch (error: any) {
        message.error(error.response.data.message ?? "");
      }
    },
    [getReviews, id, user?.id]
  );

  const tabs = [
    {
      title: "Chương trình tour",
      content: <Plan tour={tourResponse?.data} averageRating={averageRating} />,
      iconUrl: "/icons/info.svg",
    },
    {
      title: "Lịch trình",
      content: <Schedule tour={tourResponse?.data} />,
      iconUrl: "/icons/calendar.svg",
    },
  ];

  return (
    <AuthRequire>
      <Banner />
      {loading ? (
        <div className="h-screen flex items-center justify-center">
          <Spin tip="Loading..." />
        </div>
      ) : (
        <div className="content">
          <TabContent tabs={tabs} />
          <ReviewList reviews={reviews} />
          <ReviewForm onSubmit={handleReviewSubmit} />
        </div>
      )}
    </AuthRequire>
  );
}
