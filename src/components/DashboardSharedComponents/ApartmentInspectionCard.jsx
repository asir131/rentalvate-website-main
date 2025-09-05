"use client";

import React from "react";
import {
  ChevronLeft,
  AlertTriangle,
  Calendar,
  Clock,
  Star,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

//Dummy Data
const inspections = [
  {
    id: 1,
    name: "Sarah Khan",
    rating: 4.8,
    reviewCount: 212,
    issue: "Leaking faucet in kitchen sink causing water wastage.",
    date: "May 31, 2025",
    time: "07: 12 am",
    status: "Approved",
    referenceNumber: "#A102",
    avatarUrl: "https://i.pravatar.cc/100",
  },
  {
    id: 2,
    name: "Asir Mahmud",
    rating: 4.8,
    reviewCount: 212,
    issue: "Leaking faucet in kitchen sink causing water wastage.",
    date: "May 31, 2025",
    time: "07: 12 am",
    status: "Approved",
    referenceNumber: "#A102",
    avatarUrl: "https://i.pravatar.cc/100",
  },
  {
    id: 3,
    name: "Yamin Hossain",
    rating: 4.8,
    reviewCount: 212,
    issue: "Leaking faucet in kitchen sink causing water wastage.",
    date: "May 31, 2025",
    time: "07: 12 am",
    status: "Approved",
    referenceNumber: "#A102",
    avatarUrl: "https://i.pravatar.cc/100",
  },
];

const ApartmentInspectionSection = () => {
  const handlePageChange = (page) => {
    console.log("Navigate to page:", page);
    // Add your pagination logic here
  };

  return (
    <div className="max-w-7xl mx-auto p-6 min-h-screen">
      {/* Inspection Cards */}
      <div className="space-y-4">
        {inspections.map((inspection) => (
          <InspectionCard
            key={inspection.id}
            name={inspection.name}
            rating={inspection.rating}
            reviewCount={inspection.reviewCount}
            issue={inspection.issue}
            date={inspection.date}
            time={inspection.time}
            status={inspection.status}
            referenceNumber={inspection.referenceNumber}
            avatarUrl={inspection.avatarUrl}
          />
        ))}
      </div>

      {/* Pagination */}
      {/* <div className="flex justify-center items-center gap-2 mt-8">
        <button
          onClick={() => handlePageChange("prev")}
          className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
        >
          <ChevronLeft className="w-4 h-4 text-gray-600" />
        </button>

        <button
          onClick={() => handlePageChange("next")}
          className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
        >
          <ChevronLeft className="w-4 h-4 text-gray-600 rotate-180" />
        </button>
      </div> */}
    </div>
  );
};

const InspectionCard = ({
  name,
  rating,
  reviewCount,
  issue,
  date,
  time,
  status,
  referenceNumber,
  avatarUrl = "",
}) => {
  // Generate initials from name
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Card className="p-4 border border-gray-200 bg-white rounded-lg mb-4">
      <div className="flex items-start justify-between">
        {/* Left Section - User Info and Details */}
        <div className="flex gap-3 flex-1">
          {/* Avatar */}
          <Avatar className="w-10 h-10 my-auto">
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback className="bg-gray-700 text-white text-sm">
              {getInitials(name)}
            </AvatarFallback>
          </Avatar>

          {/* Details */}
          <div className="flex-1 space-y-2">
            {/* Name and Rating */}
            <div className="flex items-center gap-2">
              <h3 className="font-medium text-gray-900">{name}</h3>
              
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-sm text-gray-600">
                  {rating} ({reviewCount} reviews)
                </span>
              </div>
            </div>

            {/* Issue */}
            <div className="flex items-center gap-2 text-sm">
              <AlertTriangle className="w-4 h-4 text-gray-500" />
              <span className="text-gray-700">Issue</span>
              <span className="text-gray-600 ml-4">: {issue}</span>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span className="text-gray-700">Date</span>
              <span className="text-gray-600 ml-5">: {date}</span>
            </div>

            {/* Time */}
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="text-gray-700">Time</span>
              <span className="text-gray-600 ml-5">: {time}</span>
            </div>
          </div>
        </div>

        {/* Right Section - Status and Reference */}
        <div className="h-full flex flex-col justify-between gap-3">
          {/* Approved Status */}
          <Badge className="bg-green-50 text-green-600 hover:bg-green-50 border-green-200 font-medium px-3 py-1">
            {status}
          </Badge>

          {/* Reference Number */}
          <Badge
            variant="secondary"
            className="bg-gray-100 text-gray-600 hover:bg-gray-100 font-normal"
          >
            {referenceNumber}
          </Badge>
        </div>
      </div>
    </Card>
  );
};

// Export individual card component
export { InspectionCard };

// Export main section component
export default ApartmentInspectionSection;
