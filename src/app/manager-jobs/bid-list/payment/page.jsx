"use client";
import Image from "next/image";
import Link from "next/link";
import dummyMaintenanceRequests from "@/data/managerJobData";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { GrCheckmark } from "react-icons/gr";
import RecommendContractor from "@/components/Modal/RecommendContractor";
import Bidder from "@/data/bidder";
import { use, useState } from "react";
import BidSelect from "@/components/Modal/BidSelect";
import PaymentSuccessful from "@/components/Modal/PaymentSuccessful";
import TopUp from "@/components/Modal/TopUp";

export default function Payment() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const handleSectionClick = () => {
    setIsModalOpen(true); // Open modal
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const balance = 12;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-2 md:mx-auto">
        <div
          onClick={() => window.history.back()}
          className="cursor-pointer flex items-center gap-2 text-xl font-semibold mb-4"
        >
          <MdKeyboardArrowLeft size={30} className="align-middle mt-1" />
          <h1 className="align-middle font-semibold">Payment</h1>
        </div>
        <div className="text-center">
          <p className="opacity-60 mb-20 mx-5 md:mx-0">
            Pay Now to confirm your project. <br />
            Don’t worry, it will be safe in the admin's hands until the project
            is done.
          </p>
        </div>
        <div className="grid gap-5 py-5 px-5 rounded-xl border border-slate-400 bg-[#E8E9EB] w-full md:w-[80%] lg:w-[60%] mx-auto">
          <div className="flex">
            <p className="w-40 opacity-65 font-medium">Category</p>:{" "}
            <span className="ml-2 opacity-55">Plumbing</span>
          </div>
          <div className="flex">
            <p className="w-40 opacity-65 font-medium">Available Date Slot</p>:{" "}
            <span className="ml-2 opacity-55">Jun 10, 2025</span>
          </div>
          <div className="flex">
            <p className="w-40 opacity-65 font-medium">Estimated Duration</p>:{" "}
            <span className="ml-2 opacity-55">1.5 hours</span>
          </div>
          <div className="flex">
            <p className="w-40 opacity-65 font-medium">Quoted Price</p>:{" "}
            <span className="ml-2 opacity-55">$225</span>
          </div>
          <div className="flex">
            <p className="w-40 opacity-65 font-medium">Issue</p>:{" "}
            <span className="ml-2 opacity-55 w-45 md:w-70">
              Leaking faucet in kitchen sink causing water wastage.
            </span>
          </div>
          <div className="flex">
            <p className="w-40 opacity-65 font-medium">Platform Charge</p>:{" "}
            <span className="ml-2 opacity-55">5%</span>
          </div>
          <div className="flex">
            <p className="w-40 opacity-65 font-medium">Total Price</p>:{" "}
            <span className="ml-2 opacity-55 font-semibold text-xl">$250</span>
          </div>
        </div>
        <div className="text-center mt-8">
          <button
            onClick={openModal}
            className="bg-[#FF6600] text-white py-2 px-10 md:px-20 lg:px-24 rounded-lg font-semibold hover:bg-[#eb6207]"
          >
            Pay for confirmation
          </button>
        </div>
      </div>

      {balance > 200 && (
        <PaymentSuccessful isOpen={isOpen} close={closeModal} />
      )}
      {balance < 200 && <TopUp isOpen={isOpen} close={closeModal} />}
    </div>
  );
}
