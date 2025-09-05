"use client";
import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Bidder from "@/data/bidder";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";
const BidList = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  const bid = true;
  return (
    <div className="h-screen">
      <div
        onClick={handleGoBack}
        className="flex items-center cursor-pointer font-semibold text-lg mt-10 ml-5 md:ml-110 md:mb-10"
      >
        <MdKeyboardArrowLeft size={30} className="align-middle mt-1" />
        Bids List
      </div>
      {bid && (
        <div>
          {Bidder.map((item, index) => {
            return (
              <div
                key={index}
                className="ml-8 md:ml-115 mt-5 w-80 md:w-2/4 md:mt-5 shadow-2xl p-5 rounded-lg"
              >
                <div className="md:flex justify-between">
                  <div>
                    <div>
                      <div className="flex gap-2">
                        <div>
                          <Image
                            src={item.image}
                            alt=""
                            width={40}
                            height={40}
                          />
                        </div>
                        <div>
                          <h1>{item.name}</h1>
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
                  {item.tenantRecommended && (
                    <div>
                      <p className="bg-[#F5DDFF] py-1 px-5 rounded-lg mt-2">
                        Tenant Recommended
                      </p>
                    </div>
                  )}
                  <div className="flex gap-2 md:grid mt-5">
                    <Link
                      href={`bid-list/${item.id}`}
                      className="bg-[#1A1F36] py-1 px-5 md:h-10 rounded-lg  text-white"
                    >
                      View Details
                    </Link>
                    <button className="bg-[#FF6600] py-1 px-10 md:h-10 rounded-lg  text-white">
                      Assign
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {!bid && (
        <div className="grid justify-center">
          <div>
            <Image src="/empty.png" alt="" width={300} height={100} />{" "}
          </div>
          <div>
            <p className="text-center text-xs opacity-65 mb-20">
              No bids have been submitted yet. Technicians will <br /> start
              bidding shortly. Please check back later.
            </p>
          </div>
          <div className="flex justify-center mb-20">
            <button className="bg-[#FF6600] text-white font-semibold py-2 px-30 rounded-lg">
              Go to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BidList;
