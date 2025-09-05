import Image from "next/image";
import React from "react";
import Card from '@/components/Profile/Card'
const ReviewSection = ({
  averageRating = 4.5,
  totalReviews = 120,
  reviewBreakdown = {
    5: 50,
    4: 20,
    3: 15,
    2: 11,
    1: 5,
  },
}) => {
 

  // Star component
  const Star = ({ filled = false, half = false, size = "w-4 h-4" }) => (
    <svg className={size} viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="halfFill">
          <stop offset="50%" stopColor="#ff6b35" />
          <stop offset="50%" stopColor="#d1d5db" />
        </linearGradient>
      </defs>
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        fill={half ? "url(#halfFill)" : filled ? "#ff6b35" : "#d1d5db"}
      />
    </svg>
  );

  // Render stars for overall rating
  const renderOverallStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} filled={true} size="w-10 h-10" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<Star key={i} half={true} size="w-10 h-10" />);
      } else {
        stars.push(<Star key={i} filled={false} size="w-10 h-10" />);
      }
    }
    return stars;
  };

  const renderOverallStarsForPeopleReview = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} filled={true} size="w-3 h-3" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<Star key={i} half={true} size="w-3 h-3" />);
      } else {
        stars.push(<Star key={i} filled={false} size="w-3 h-3" />);
      }
    }
    return stars;
  };

  // Render stars for breakdown rows
  const renderBreakdownStars = (starCount) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<Star key={i} filled={i < starCount} size="w-4 h-4" />);
    }
    return stars;
  };

  return (
    <div className="mt-10">
      <h1 className="font-semibold ml-10 md:ml-0 text-xl mb-10">Review</h1>
      <div className="w-fit mx-10 md:mx-0 md:flex justify-between gap-10 ">
        {/* Overall Rating */}
        <div className="md:border-r-2 border-gray-200 pr-50">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1">
              {renderOverallStars(averageRating)}
            </div>
            <span className="text-gray-600 text-2xl font-medium">
              ({averageRating}/5)
            </span>
          </div>

          {/* Total Reviews */}
          <div className="mb-4">
            <span className="text-gray-700 text-xl font-medium">
              Total Reviews ({totalReviews})
            </span>
          </div>
        </div>

        {/* Rating Breakdown */}
        <div className="space-y-1">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center gap-2">
              <span className="text-gray-700 text-sm w-2">{rating}</span>
              <div className="flex items-center gap-0.5">
                {renderBreakdownStars(rating)}
              </div>
              <span className="text-gray-500 text-sm">
                ({String(reviewBreakdown[rating] || 0).padStart(2, "0")})
              </span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Card/>
      </div>
      
    </div>
  );
};

export default ReviewSection;
