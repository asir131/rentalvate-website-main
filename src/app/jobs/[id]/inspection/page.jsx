"use client";
import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Inspection from "@/data/inspectionData";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
const page = () => {
  const handleGoBack = () => {
    window.history.back();
  };
  

  return (
    <div>
      <div
        onClick={handleGoBack}
        className="flex items-center cursor-pointer font-semibold text-lg mt-10 ml-5 md:ml-110 md:mb-20"
      >
        <MdKeyboardArrowLeft size={30} className="align-middle mt-1" />
        Inspection Request
      </div>
      <div >
        {Inspection.map((item, index) => {
          return (
            <div key={index} className="ml-8 md:ml-115 mt-5 w-80 md:w-2/3 md:mt-5 shadow-2xl p-5 rounded-lg">
              <div className="md:flex justify-between" >
              <div>
                <div className="flex gap-2">
                  <span className="h-10 w-10">
                    <Image
                      src={item.user.image}
                      height={100}
                      width={100}
                      alt=""
                    />
                  </span>
                  <span>
                    <span className="font-semibold">{item.user.name}</span>
                    <span className="flex items-center">
                      <FaStar className="text-orange-300" />
                      4.8 (212 reviews)
                    </span>
                  </span>
                </div>
                <div className="ml-2 ">
                  <div className="flex my-3">
                    <span className="flex items-center gap-2 w-17 md:w-32">
                      <Image src="/date.png" alt=" " width={20} height={20} />{" "}
                      Date{" "}
                    </span>
                    : {item.date}
                  </div>
                  <div className="flex ">
                    <span className="flex items-center gap-2  w-17 md:w-32">
                      <Image src="/time.png" alt=" " width={20} height={20} />{" "}
                      Date{" "}
                    </span>
                    : {item.time}
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col gap-2 mt-2 justify-between">
                
                {
                  item.status=="approved" && (<span className="text-[#00D921] text-center w-30  bg-[#E6FFE8] py-1 px-5 rounded-xl font-semibold">
                  Approved
                </span>)
                }
                {
                  item.status=="pending" && (<span className="text-[#D2CB01] text-center w-30  bg-[#FEFFE6] py-1 px-5 rounded-xl font-semibold">
                  Pending
                </span>)
                }
                <span className=" text-center w-30 bg-[#B8BAC1] py-1 px-3 rounded-xl font-semibold">
                  #{item.id}
                </span>
              </div>
            </div>
            {item.status == "pending" && (
          
            <div className="flex  text-center justify-center items-center w-full gap-3 mt-2 md:mt-0"><button className="bg-[#1A1F36] text-center py-1 px-10 rounded-lg text-white font-semibold">
              Reject
            </button>
            <button className="bg-[#FF6600] text-center py-1 px-10 rounded-lg text-white font-semibold">
              Approve
            </button></div>
          
        )}
            </div>
          );
        })}

       
      </div>
    </div>
  );
};

export default page;
