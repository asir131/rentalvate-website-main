import React from 'react'
import Image from 'next/image'

const Card = () => {

 const reviewBreakdown = {
    5: 50,
    4: 20,
    3: 15,
    2: 11,
    1: 5,
  }

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
  const reviewData = [
    {
      unit: "#A102",
      issue: "Leaking faucet in kitchen sink causing water wastage.",
      entries: [
        {
          role: "Manager",
          name: "Cameron",
          rating: 1,
          comment: "It was so fresh & clean",
          image: "/reviewLogo.png",
        },
        {
          role: "Tenant",
          name: "Cameron",
          rating: 2.5,
          comment: "It was so fresh & clean",
          image: "/reviewLogo.png",
        },
      ],
    },
    {
      unit: "#A102",
      issue: "Leaking faucet in kitchen sink causing water wastage.",
      entries: [
        {
          role: "Manager",
          name: "Cameron",
          rating: 3,
          comment: "It was so fresh & clean",
          image: "/reviewLogo.png",
        },
        {
          role: "Tenant",
          name: "Cameron",
          rating: 4,
          comment: "It was so fresh & clean",
          image: "/reviewLogo.png",
        },
      ],
    },
    {
      unit: "#A102",
      issue: "Leaking faucet in kitchen sink causing water wastage.",
      entries: [
        {
          role: "Manager",
          name: "Cameron",
          rating: 5,
          comment: "It was so fresh & clean",
          image: "/reviewLogo.png",
        },
        {
          role: "Tenant",
          name: "Cameron",
          rating: 2,
          comment: "It was so fresh & clean",
          image: "/reviewLogo.png",
        },
      ],
    },
    {
      unit: "#A102",
      issue: "Leaking faucet in kitchen sink causing water wastage.",
      entries: [
        {
          role: "Manager",
          name: "Cameron",
          rating: 0,
          comment: "It was so fresh & clean",
          image: "/reviewLogo.png",
        },
        {
          role: "Tenant",
          name: "Cameron",
          rating: 4,
          comment: "It was so fresh & clean",
          image: "/reviewLogo.png",
        },
      ],
    },
    
    
  ];

  return (
    <div className="review-cards-container mx-10 md:mx-0 mt-5">
  {reviewData.map((review, index) => (
    <div key={index} className="review-card w-80 md:w-200 shadow-md mb-6 px-10 py-5 rounded-xl">
      <h3 className="text-xl font-bold text-gray-800">{review.unit}</h3>
      <p className="font-semibold text-gray-600 mb-4">{review.issue}</p>

      {review.entries.map((entry, entryIndex) => (
        <div key={entryIndex} className="review flex flex-col mb-6">
          <div className="user-info flex gap-5 mt-2">
            <span className="user-avatar">
              <Image
                src={entry.image}
                alt={`${entry.role} Avatar`}
                width={50}
                height={50}
                className="rounded-full"
              />
            </span>
            <div className="rating flex flex-col justify-start">
              <span className="user-name font-semibold text-gray-800">
                {entry.role}: {entry.name}
              </span>
              <div className="flex items-center">
                {renderOverallStarsForPeopleReview(entry.rating)}
              </div>
              <p className="comment text-gray-600 mt-2">{entry.comment}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  ))}
</div>

  );
};

export default Card;
