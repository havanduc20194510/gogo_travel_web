// components/ReviewList.tsx
import { Review } from "@/models/review/get";
import React from "react";

const ReviewList = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Tour Reviews</h2>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="mb-4 p-4 border rounded shadow-sm">
            <p className="text-gray-700">{review.content}</p>
            <p className="text-gray-500 text-sm">by {review.userName}</p>
            <div className="text-yellow-500">
              {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
            </div>
          </div>
        ))
      ) : (
        <div>Chưa có review nào</div>
      )}
    </div>
  );
};

export default ReviewList;
