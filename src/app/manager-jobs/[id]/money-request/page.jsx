"use client";
import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/navigation";
const MoneyRequest = () => {
   const router = useRouter();
  const data = [
    { itemName: "PVC Pipe", modelNo: "A5w23 d", quantity: 3, totalCost: 25 },
    { itemName: "PVC Pipe", modelNo: "A5w23 d", quantity: 3, totalCost: 25 },
    { itemName: "PVC Pipe", modelNo: "A5w23 d", quantity: 3, totalCost: 25 },
    { itemName: "PVC Pipe", modelNo: "A5w23 d", quantity: 3, totalCost: 25 },
    { itemName: "PVC Pipe", modelNo: "A5w23 d", quantity: 3, totalCost: 25 },
    { itemName: "PVC Pipe", modelNo: "A5w23 d", quantity: 3, totalCost: 25 },
  ];
  const handleGoBack = () => {
    window.history.back();
  };

  const bid = true;
  return (
    <div className=" md:mx-100">
      <div
        onClick={handleGoBack}
        className="flex items-center cursor-pointer font-semibold text-lg mt-10 ml-5 md:ml-10 md:mb-10"
      >
        <MdKeyboardArrowLeft size={30} className="align-middle mt-1" />
        Money Request
      </div>
      <div>
        <div className="md:flex grid gap-5 justify-end mt-2 mx-10 md:mx-20">
          <button className="border border-[#FF6600] px-8 py-1 rounded-lg">
            View Receipt or photo
          </button>
        </div>
      </div>
      <div className="flex flex-col mx-10 md:mx-80 mt-10">
        <p>
          <span className="w-40 mr-10  md:mr-20 font-semibold">
            Request Type
          </span>
          <span>:Materials Purchase </span>
        </p>
        <p className="my-10">
          <span className="w-40 mr-18 md:mr-28 font-semibold">Amount</span>{" "}
          <span>:350</span>
        </p>
        <p className="font-semibold">Description</p>
        <p className="text-xs mt-5">
          Requesting additional tiles for the kitchen flooring. The current
          stock is not sufficient to complete the layout as per the revised
          measurements. I’ve attached the updated layout plan for reference.
          Please review and approve at your earliest convenience so we can avoid
          delays in the timeline.
        </p>
      </div>
      <div className="flex justify-center mt-15 gap-2">
        <button className="text-white bg-[#1A1F36] rounded-lg py-1 px-8 md:px-15">
          Decline
        </button>
        <button onClick={()=>router.push("/")} className="text-white bg-[#FF6600] rounded-lg py-1 px-8 md:px-15">
          Approve
        </button>
      </div>
    </div>
  );
};

export default MoneyRequest;
