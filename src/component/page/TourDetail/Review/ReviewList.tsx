// components/ReviewList.tsx
import React from "react";

interface Review {
  id: number;
  name: string;
  email: string;
  title: string;
  content: string;
  rating: number;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    title: "Amazing Tour",
    content: "We had a wonderful time!",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    title: "Great Experience",
    content: "Highly recommend this tour.",
    rating: 4,
  },
];

const ReviewList: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Tour Reviews</h2>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review.id} className="mb-4 p-4 border rounded shadow-sm">
            <h3 className="text-xl font-semibold">{review.title}</h3>
            <p className="text-gray-700">{review.content}</p>
            <p className="text-gray-500 text-sm">
              by {review.name} ({review.email})
            </p>
            <div className="text-yellow-500">
              {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
            </div>
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
};

export default ReviewList;
