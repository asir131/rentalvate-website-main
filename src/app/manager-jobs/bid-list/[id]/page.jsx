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

export default function BidDetails({ params }) {
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
  const [review, setReview] = useState(false);
  const { id } = use(params);
  const item = Bidder.find((item) => item.id === Number(id));
  

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-2 md:mx-100">
        <div
          onClick={() => window.history.back()}
          className="cursor-pointer flex items-center  md:mt-10   gap-2 text-xl font-semibold mb-4"
        >
          <MdKeyboardArrowLeft size={30} className="align-middle mt-1" />
          <h1 className="align-middle font-semibold">Bid’s Details</h1>
        </div>
        <div>
          <div

            className="ml-8 md:ml-40 mt-5 w-80 md:w-2/4 md:mt-5 p-5 "
          >
            <div className="md:flex justify-between">
              <div>
                <div>
                  <div className="flex gap-2">
                    <div>
                      <Image src={item.image} alt="" width={40} height={40} />
                    </div>
                    <div>
                      <h1 className="font-semibold">{item.name}</h1>
                      <h1 className="text-xs">{item.profession}</h1>
                      <span className="flex items-center text-xs">
                        <FaStar className="text-orange-300" />
                        4.8 (212 reviews)
                      </span>
                    </div>
                  </div>
                  <div></div>
                </div>
                <div className="mt-4">
                  <div className="flex">
                    <h1 className="w-40 text-sm font-semibold">
                      Quoted Price
                    </h1>{" "}
                    <span className="text-sm opacity-70">
                      : ${item.quotedPrice}
                    </span>
                  </div>
                  <div className="flex">
                    <h1 className="w-40 text-sm font-semibold">
                      Available Date Slot
                    </h1>{" "}
                    <span className="text-sm opacity-70">
                      {" "}
                      : {item.availableDateSlot}
                    </span>
                  </div>
                  <div className="flex">
                    <h1 className="w-40 text-sm font-semibold">
                      Estimated Duration
                    </h1>{" "}
                    <span className="text-sm opacity-70">
                      : {item.estimatedDuration}
                    </span>
                  </div>
                </div>
              </div>


            </div>
            <div className="mt-10 md:w-200 opacity-60 text-sm leading-relaxed whitespace-pre-line p-4 bg-white shadow-sm rounded-lg">
              {item.description}
            </div>

          </div>
        </div>
          <div className=" flex gap-2 items-center justify-center text-center ">
            <button className="bg-[#1A1F36] py-1 px-12 text-white rounded-lg">Back</button>
          <button onClick={openModal} className="bg-[#FF6600] py-1 px-12 text-white rounded-lg">Assign</button>
          </div>
      </div>

      <BidSelect isOpen={isOpen} close={closeModal} />
    </div>
  );
}
