

"use client";

import { useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaStar } from "react-icons/fa6";

const ManagersReview = () => {
  const [ratings, setRatings] = useState({
    timeliness: 0,
    jobQuality: 0,
    professionalism: 0,
  });

  const [hoverRatings, setHoverRatings] = useState({
    timeliness: 0,
    jobQuality: 0,
    professionalism: 0,
  });

  const handleRatingChange = (category, newRating) => {
    setRatings((prev) => ({
      ...prev,
      [category]: newRating,
    }));
  };

  const handleStarClick = (category, starValue) => {
    const currentRating = ratings[category];
    // If clicking the same star that's already selected, toggle between full and half
    if (
      Math.floor(starValue) === Math.floor(currentRating) &&
      currentRating % 1 === 0
    ) {
      handleRatingChange(category, starValue - 0.5);
    } else {
      handleRatingChange(category, starValue);
    }
  };

  const handleStarHover = (category, starValue) => {
    setHoverRatings((prev) => ({
      ...prev,
      [category]: starValue,
    }));
  };

  const handleMouseLeave = (category) => {
    setHoverRatings((prev) => ({
      ...prev,
      [category]: 0,
    }));
  };

  const renderStar = (category, starIndex) => {
    const currentRating = hoverRatings[category] || ratings[category];
    const isFull = currentRating >= starIndex;
    const isHalf =
      currentRating >= starIndex - 0.5 && currentRating < starIndex;

    return (
      <div key={starIndex} className="relative cursor-pointer">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="star-container"
          onClick={() => handleStarClick(category, starIndex)}
          onMouseEnter={() => handleStarHover(category, starIndex)}
        >
          {/* Background star (gray) */}
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill="#e5e7eb"
            stroke="#d1d5db"
            strokeWidth="1"
          />

          {/* Foreground star (yellow) */}
          {(isFull || isHalf) && (
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              fill="#fbbf24"
              stroke="#f59e0b"
              strokeWidth="1"
              clipPath={
                isHalf && !isFull ? `url(#half-clip-${category})` : undefined
              }
            />
          )}
        </svg>

        {/* Half star click area */}
        <div
          className="absolute top-0 left-0 w-1/2 h-full cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            handleStarClick(category, starIndex - 0.5);
          }}
          onMouseEnter={() => handleStarHover(category, starIndex - 0.5)}
        />
      </div>
    );
  };

  const renderStarRating = (category, label) => {
    return (
      <div key={category} className="flex items-center gap-4 py-3">
        <span className="text-gray-700 font-medium w-32">{label}</span>
        <div
          className="flex gap-1"
          onMouseLeave={() => handleMouseLeave(category)}
        >
          <svg width="0" height="0">
            <defs>
              <clipPath id={`half-clip-${category}`}>
                <rect x="0" y="0" width="12" height="24" />
              </clipPath>
            </defs>
          </svg>
          {[1, 2, 3, 4, 5].map((starIndex) => renderStar(category, starIndex))}
        </div>
        <span className="text-sm text-gray-500 ml-2">
          {ratings[category] ? ratings[category].toFixed(1) : "0.0"}
        </span>
      </div>
    );
  };

  const handleSubmit = () => {
    console.log("Review submitted:", ratings);
    // Here you would typically send the ratings to your backend
  };

  const averageRating =
    Object.values(ratings).reduce((sum, rating) => sum + rating, 0) / 3;

  const categories = [
    { key: "timeliness", label: "Timeliness" },
    { key: "jobQuality", label: "Job Quality" },
    { key: "professionalism", label: "Professionalism" },
  ];
  const [feedback, setFeedback] = useState("");
  const maxLength = 50;

  const handleInputChange = (e) => {
    if (e.target.value.length <= maxLength) {
      setFeedback(e.target.value);
    }
  };
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <div>
      {/* Rating Section */}
      <div className="flex justify-center ">
        <div className="  rounded-lg flex flex-col justify-center  ">
          <div>
            <p className="text-[#FF6600] mx-5 md:mx-0 font-semibold bg-white px-10 md:px-40 py-2 border border-[#FF6600] rounded-xl">
              View Proved
            </p>
            <p className="text-[#00BD3F] text-xs mt-7">
              Tenant has confirmed the job is completed.
            </p>
          </div>

          <div className=" md:ml-10 ">
            {categories.map(({ key, label }) => renderStarRating(key, label))}
          </div>
          <div>
            <p className="text-xs md:text-sm mt-5 md:ml-5">
              "Yes, the technician finished everything. The issue is resolved."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagersReview;
