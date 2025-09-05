"use client";

import { useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { useRouter } from "next/navigation";
const ContractorReview = () => {

 const router = useRouter();
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
    router.push("/");
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
      {/* Header Section */}
      <div
        onClick={handleGoBack}
        className="flex items-center cursor-pointer font-semibold text-lg mt-10 ml-5 md:ml-110"
      >
        <MdKeyboardArrowLeft size={25} />
        Review
      </div>

      {/* Contractor Profile Section */}
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="relative w-24 h-24 sm:w-32 sm:h-32">
          <Image
            src="/contractorImgs.png"
            className="object-cover rounded-full"
            alt="Contractor"
            layout="fill"
          />
        </div>
        <h1 className="text-center font-semibold text-xl my-1">Sarah Khan</h1>
        <span className="flex items-center">
          <FaStar className="text-orange-300" />
          4.8 (212 reviews)
        </span>
      </div>

      {/* Rating Section */}
      <div className="flex justify-center mt-10">
        <div className="bg-white p-6 rounded-lg max-w-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 md:ml-10">
            Leave a Review for the Contractor
          </h2>

          <div className="md:ml-10">
            {categories.map(({ key, label }) => renderStarRating(key, label))}
          </div>

          <div className="w-full md:w-120 mx-auto p-4">
            <label
              htmlFor="feedback-input"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Feedback (Optional)
            </label>
            <div className="relative">
              <div className="border w-full h-32 border-gray-400 rounded-lg overflow-hidden">
                <input
                  id="feedback-input"
                  type="text"
                  value={feedback}
                  onChange={handleInputChange}
                  className="p-4 outline-none resize-none text-sm w-full"
                  placeholder="Write a short feedback here"
                />
              </div>
              <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
                <span></span>
                <span>Maximum {maxLength} characters</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={averageRating === 0}
            className={`w-full mt-6 py-2 px-4 rounded-md font-medium transition-colors ${
              averageRating > 0
                ? "bg-orange-600 text-white hover:bg-orange-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContractorReview;
