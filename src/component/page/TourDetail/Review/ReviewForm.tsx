// components/ReviewForm.tsx
import { Button, Rate, message } from "antd";
import React, { useCallback, useState } from "react";

interface ReviewFormProps {
  onSubmit: (review: { content: string; rating: number }) => Promise<void>;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit }) => {
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(1);

  const handleSubmit = useCallback(async () => {
    if (!content) {
      message.error("Vui lòng nhập nhận xét !!");
      return;
    }
    await onSubmit({ content, rating });
    setContent("");
    setRating(1);
  }, [content, onSubmit, rating]);

  return (
    <div className="pt-4">
      <h2 className="text-2xl font-bold mb-4">Viết review</h2>
      <div className="space-y-4">
        <div>
          <Rate
            defaultValue={3}
            allowClear={false}
            onChange={(value) => setRating(value)}
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border rounded mt-4"
            required
          />
        </div>
        <Button type="primary" onClick={handleSubmit}>
          Submit Review
        </Button>
      </div>
    </div>
  );
};

export default ReviewForm;
