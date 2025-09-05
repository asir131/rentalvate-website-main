"use client";

import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import RouteTitle from "../RouteTitle/RouteTitle";
import { useRouter } from "next/navigation";
import GlobalModal from "../GlobalModal/GlobalModal";
import SuccessModal from "../DashboardSharedComponents/SuccessModal";
import { useState } from "react";

//Dummy contractor data
const contractors = [
  {
    id: 1,
    name: "Sarah Khan",
    profession: "Cleaner House Interior",
    rating: 4.8,
    reviewCount: 212,
    avatarUrl: "https://i.pravatar.cc/100",
  },
  {
    id: 2,
    name: "John Smith",
    profession: "Professional Plumber",
    rating: 4.9,
    reviewCount: 156,
    avatarUrl: "https://i.pravatar.cc/100",
  },
  {
    id: 3,
    name: "Maria Garcia",
    profession: "Electrician Specialist",
    rating: 4.7,
    reviewCount: 89,
    avatarUrl: "https://i.pravatar.cc/100",
  },
];
const SelectContractor = () => {
  const router = useRouter();
  const handleSend = (contractorName) => {
    console.log(`Send button clicked for ${contractorName}`);
    router.push("/dashboard")
  };

  return (
    <div className="max-w-7xl mx-auto p-6 min-h-screen">
      <RouteTitle titleName={"Select Contractor"} />

      <div className="space-y-3 max-w-5xl mx-auto">
        {contractors.map((contractor) => (
          <ContractorCard
            key={contractor.id}
            name={contractor.name}
            profession={contractor.profession}
            rating={contractor.rating}
            reviewCount={contractor.reviewCount}
            avatarUrl={contractor.avatarUrl}
            onSend={() => handleSend(contractor.name)}
          />
        ))}
      </div>
    </div>
  );
};

const ContractorCard = ({
  name = "Sarah Khan",
  profession = "Cleaner House Interior",
  rating = 4.8,
  reviewCount = 212,
  avatarUrl = "",
  onSend = () => {},
  className = "",
}) => {
  // Generate initials from name for avatar fallback
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  // Render star rating
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < fullStars
                ? "fill-amber-400 text-amber-400"
                : index === fullStars && hasHalfStar
                ? "fill-amber-400/50 text-amber-400"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
      </div>
    );
  };

  const [isModalOpen,setIsModalOpen]=useState(false)
  return (
    <>
     <GlobalModal
        isModalOpen={isModalOpen}
        setIsModalOpen={() => setIsModalOpen(!isModalOpen)}
      >
        <SuccessModal/>
      </GlobalModal>
    
    <Card
      className={`p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow ${className}`}
    >
      <div className="flex items-center justify-between gap-4">
        {/* Left section - Avatar and Info */}
        <div className="flex items-center gap-3 flex-1">
          <Avatar className="w-12 h-12">
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback className="bg-gray-700 text-white font-medium">
              {getInitials(name)}
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <h3 className="font-semibold text-gray-900 text-base">{name}</h3>
            <p className="text-sm text-gray-600">{profession}</p>
            <div className="flex items-center gap-2 mt-1">
              {renderStars()}
              <span className="text-sm text-gray-600">
                {rating} ({reviewCount} reviews)
              </span>
            </div>
          </div>
        </div>

        {/* Right section - Send Button */}
        <Button
          onClick={onSend}
          className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 md:px-8 py-2 rounded-md transition-colors"
        >
          Send
        </Button>
      </div>
    </Card>
    </>
  );
};

export default SelectContractor;
