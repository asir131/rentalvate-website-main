"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

const BiddingModal = () => {
  const router = useRouter();
  const handleNavigation = (routeURL) => {
    router.push(routeURL);
  };
  return (
    <div className="bg-white w-80 md:w-96 h-70 rounded-lg flex flex-col items-center justify-center gap-4">
      <div>
        <h1 className="text-xl font-semibold">Choose How to Proceed</h1>
        <p className="text-sm text-gray-600">
          Select a method to assign this job
        </p>
      </div>
      <Button
        className={"w-10/12"}
        onClick={() => handleNavigation("/dashboard/create-bid-post")}
      >
        Create Bid Post
      </Button>

      <Button
        variant={"outline"}
        className={"w-10/12"}
        onClick={() => handleNavigation("/dashboard/create-post-manually")}
      >
        Create Manual Proposal
      </Button>
    </div>
  );
};

export default BiddingModal;
