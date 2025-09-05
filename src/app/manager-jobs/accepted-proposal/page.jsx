"use client";
import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Accepted from "@/data/bidder";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { useRouter } from "next/navigation";
const BidList = () => {
  const handleGoBack = () => {
    window.history.back();
  };
 const router = useRouter();
  return (
    <div>
      <div
        onClick={handleGoBack}
        className="flex items-center cursor-pointer font-semibold text-lg mt-10 ml-5 md:ml-110 md:mb-10"
      >
        <MdKeyboardArrowLeft size={30} className="align-middle mt-1" />
        Accepted Proposal
      </div>
      <div>
        {Accepted.map((item, index) => {
          return (
            <div
              key={index}
              className="ml-8 md:ml-115 mt-5 w-80 md:w-2/4 md:mt-5 shadow-2xl p-5 rounded-lg"
            >
              <div className="flex justify-between">
                <div>
                  <div>
                    <div className="flex gap-2">
                      <div>
                        <Image src={item.image} alt="" width={40} height={40} />
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
                </div>

                <div className="flex gap-2 md:grid mt-5">
                  <button onClick={()=>router.push("/")} className="bg-[#FF6600] cursor-pointer py-1 px-10 md:h-10 rounded-lg  text-white mb-2">
                    Assign
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BidList;
