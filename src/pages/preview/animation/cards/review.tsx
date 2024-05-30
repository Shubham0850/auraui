import React from "react";
import ReviewCard from "@/components/ui/examples/review-card";

type Props = {};

function Review({}: Props) {
  return (
    <div className="flex items-center justify-center h-screen ">
      <ReviewCard />
    </div>
  );
}

export default Review;
