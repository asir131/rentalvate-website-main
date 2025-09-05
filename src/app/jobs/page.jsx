"use client";
import React, { useEffect } from "react";
import dummyMaintenanceRequests from "@/data/maintenanceRequests.js";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { GrCheckmark } from "react-icons/gr";
import { FaCircle } from "react-icons/fa6";

const Jobs = () => {
  const [activeTab, setActiveTab] = useState("My Request");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const handleClick = (tabName) => {
    setActiveTab(tabName);
    setCurrentPage(1);
  };

  const tabToStatus = {
    "My Request": "pending",
    "Active Job": "in-progress",
    Completed: "completed",
  };

  const currentStatus = tabToStatus[activeTab];
  const filteredData = dummyMaintenanceRequests.filter(
    (item) => item.status === currentStatus
  );

  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getButtonStyles = (tabName) => {
    const baseStyles = "px-3 sm:px-6 md:px-10 pb-2 transition-all text-center";
    const activeStyles = "relative z-10 border-b-4 border-b-[#FF6600]";
    return `${baseStyles} ${activeTab === tabName ? activeStyles : ""}`;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const [count, setCount] = useState("mt-6");
  useEffect(() => {
    if (currentData.length < 4) {
      setCount("mt-80");
    } else {
      setCount("mt-6");
    }
  }, [currentData.length]);
  console.log("currentData", currentData.length);

  return (
    <div className="flex md:ml-0 flex-col">
      <div className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col items-center justify-between max-w-6xl mx-auto">
          {/* Tabs Section */}
          <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col w-full">
            <div className="flex justify-around relative text-xs sm:text-sm md:text-base font-semibold">
              <button
                className={`${getButtonStyles("My Request")} whitespace-nowrap`}
                onClick={() => handleClick("My Request")}
              >
                My Request
              </button>
              <button
                className={`${getButtonStyles("Active Job")} whitespace-nowrap`}
                onClick={() => handleClick("Active Job")}
              >
                Active Job
              </button>
              <button
                className={`${getButtonStyles("Completed")} whitespace-nowrap`}
                onClick={() => handleClick("Completed")}
              >
                Completed
              </button>
            </div>
            <div className="border-b-2 border-slate-400 -mt-[2px] w-full"></div>
          </div>

          {/* Search Section */}
          <div className="md:w-1/2 max-w-2xl flex justify-between items-center relative border-2 border-[#FF6600] rounded-[10px] my-5">
            <Image
              className="absolute left-2 z-10"
              src="/searchIcon.png"
              height={20}
              width={20}
              alt="Search icon"
            />
            <input
              type="text"
              className="pl-10 pr-2 py-2 outline-none text-sm sm:text-base"
              placeholder="Search..."
            />
            <button className="text-sm sm:text-base bg-[#FF6600] text-white py-2 px-3 sm:px-5 rounded-r-[5px] whitespace-nowrap">
              Search
            </button>
          </div>

          {/* Jobs List */}
          <div className="w-90 md:w-full max-w-4xl flex-1">
            {currentData.map((item) => (
              <div
                className="flex md:w-220 flex-col lg:flex-row mb-5 shadow-2xl rounded-lg p-1 sm:p-1 bg-white"
                key={item.id}
              >
                {/* Image Section */}
                <div className="flex justify-center lg:justify-start mb-4 lg:mb-0 lg:mr-6">
                  <Link className="relative" href={`jobs/${item.id}`} passHref>
                    <Image
                      src={item.imageUrl[0]}
                      width={250}
                      height={150}
                      alt={`Image for ${item.title}`}
                      className="cursor-pointer rounded object-cover w-full max-w-[350px] h-[200px] sm:h-[120px] lg:h-[150px]"
                    />

                    {/* Arrived  */}
                    {item.statusOption === "arrived" && (
                      <div className="absolute text-sm w-full top-40 md:top-28 flex justify-between items-center ">
                        <span className="flex  items-center gap-2 ml-2 mt-3 bg-[#FEE9DC] text-[#00881D] font-semibold  px-6 rounded-3xl">
                          <FaCircle />
                          Arrived
                        </span>
                        <span className="bg-transparent mt-2 backdrop-blur-sm mr-2  text-xs border  border-white rounded-2xl px-5">
                          #{item.id}
                        </span>
                      </div>
                    )}
                    {/* En Route  */}
                    {item.statusOption === "en route" && (
                      <div className="absolute text-sm w-full top-40 md:top-28 flex justify-between items-center ">
                        <span className="flex  items-center gap-2 ml-2 mt-3 bg-[#FEE9DC] text-[#D9C000] font-semibold  px-6 rounded-3xl">
                          <FaCircle />
                          En Route
                        </span>
                        <span className="bg-transparent mt-2 backdrop-blur-sm mr-2  text-xs border  border-white rounded-2xl px-5">
                          #{item.id}
                        </span>
                      </div>
                    )}
                    {/* mark complete  */}
                    {item.statusOption === "mark complete" && (
                      <div className="absolute text-sm w-full top-40 md:top-28 flex justify-between items-center ">
                        <span className="ml-2 flex  text-[#3586FF] justify-center items-center gap-2 mt-3 bg-[#FEF4DA]  font-semibold  px-3 rounded-3xl">
                          <GrCheckmark
                            className=""
                            style={{ fontSize: "20px", fontWeight: "bold" }}
                          />
                          Mark Complete
                        </span>
                        <span className="bg-transparent mt-2 backdrop-blur-sm mr-2  text-xs border  border-white rounded-2xl px-5">
                          #{item.id}
                        </span>
                      </div>
                    )}

                    {/* Assigned */}
                    {item.statusOption === "assigned" && (
                      <div className="absolute text-sm w-full top-40 md:top-28 flex justify-between items-center ">
                        <span className="ml-2   flex  justify-center items-center gap-5 mt-3 bg-[#FEF4DA] text-[#FF6600] font-semibold  px-5 rounded-3xl">
                          <Image
                            src="/assigned.png"
                            alt=""
                            width={15}
                            height={15}
                          />{" "}
                          Assigned
                        </span>
                        <span className="bg-transparent backdrop-blur-sm mr-2  text-xs border  border-white rounded-2xl px-5">
                          #{item.id}
                        </span>
                      </div>
                    )}
                    {/* Approved  */}
                    {item.statusOption === "approved" && (
                      <div className="absolute text-sm w-full top-40 md:top-28 flex justify-between items-center ">
                        <span className="ml-2 mt-3 bg-[#FEE9DC] text-[#E85D00] font-semibold  px-10 rounded-3xl">
                          Approved
                        </span>
                        <span className="bg-transparent mt-2 backdrop-blur-sm mr-2  text-xs border  border-white rounded-2xl px-5">
                          #{item.id}
                        </span>
                      </div>
                    )}
                    {/* Departed  */}
                    {item.statusOption === "departed" && (
                      <div className="absolute text-sm w-full top-40 md:top-28 flex justify-between items-center ">
                        <span className="flex  items-center gap-2 ml-2 mt-3 bg-[#FEE9DC] text-[#E94C4C] font-semibold  px-6 rounded-3xl">
                          <FaCircle />
                          Departed
                        </span>
                        <span className="bg-transparent mt-2 backdrop-blur-sm mr-2  text-xs border  border-white rounded-2xl px-5">
                          #{item.id}
                        </span>
                      </div>
                    )}

                    {/* Awaiting review  */}
                    {item.statusOption === "awaiting review" && (
                      <div className="absolute text-sm w-full top-40 md:top-28 flex justify-between items-center ">
                        <span className="flex  items-center gap-2 ml-2 mt-3 bg-[#FEF4DA] text-[#877C00] font-semibold  px-6 rounded-3xl">
                          Awaiting Review
                        </span>
                        <span className="bg-transparent mt-2 backdrop-blur-sm mr-2  text-xs border  border-white rounded-2xl px-5">
                          #{item.id}
                        </span>
                      </div>
                    )}
                    {/* Reviewed  */}
                    {item.statusOption === "reviewed" && (
                      <div className="absolute text-sm w-full top-40 md:top-28 flex justify-between items-center ">
                        <span className="flex  items-center gap-2 ml-2 mt-3 bg-[#F3FFE9] text-[#056300] font-semibold  px-6 rounded-3xl">
                          Reviewed
                        </span>
                        <span className="bg-transparent mt-2 backdrop-blur-sm mr-2  text-xs border  border-white rounded-2xl px-5">
                          #{item.id}
                        </span>
                      </div>
                    )}
                  </Link>
                </div>

                {/* Content Section */}
                <div className="flex-1 min-w-0">
                  {/* Job Details */}
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex sm:flex-row sm:items-center">
                      <div className="flex  items-center gap-2 mb-1 sm:mb-0 sm:w-24 md:w-32">
                        <Image src="/issue.png" width={17} height={17} alt="" />
                        <span className="font-semibold text-sm w-20">
                          Issue
                        </span>
                      </div>
                      <span className="opacity-70 text-sm sm:ml-4">
                        : {item.title}
                      </span>
                    </div>

                    <div className="flex sm:flex-row sm:items-center">
                      <div className="flex items-center gap-2 mb-1 sm:mb-0 sm:w-24 md:w-32">
                        <Image
                          src="/category.png"
                          width={20}
                          height={20}
                          alt=""
                        />
                        <span className="font-semibold text-sm w-20">
                          Category
                        </span>
                      </div>
                      <span className="opacity-70 text-sm sm:ml-4">
                        : {item.category}
                      </span>
                    </div>

                    {/* deadline */}
                    {item.status === "in-progress" &&
                      item.statusOption === "approved" && (
                        <div className="flex sm:flex-row sm:items-center">
                          <div className="flex items-center gap-2 mb-1 sm:mb-0 sm:w-24 md:w-32">
                            <Image
                              src="/deadline.png"
                              width={20}
                              height={20}
                              alt="urgency icon"
                            />
                            <span className="font-semibold text-sm w-20">
                              Deadline
                            </span>
                          </div>
                          <span className="opacity-70 text-sm sm:ml-4">
                            : {item.deadline}
                          </span>
                        </div>
                      )}

                    {/* urgency */}
                    {(item.status === "pending" ||
                      item.statusOption === "approved") && (
                      <div className="flex sm:flex-row sm:items-center">
                        <div className="flex  items-center gap-2 mb-1 sm:mb-0 sm:w-24 md:w-32">
                          <Image
                            src="/urgency.png"
                            width={22}
                            height={20}
                            alt="urgency icon"
                          />
                          <span className="font-semibold text-sm w-20">
                            Urgency
                          </span>
                        </div>
                        <span className="opacity-70 text-sm sm:ml-4">
                          : {item.urgency ? "Yes" : "No"}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* start date || duration */}
                  {(item.status === "completed" ||
                    (item.status === "in-progress" &&
                      item.statusOption !== "approved")) && (
                    <div>
                      <div className="flex sm:flex-row sm:items-center mt-3">
                        <div className="flex items-center gap-2 mb-1 sm:mb-0 sm:w-24 md:w-32">
                          <Image
                            src="/startDate.png"
                            width={17}
                            height={17}
                            alt="urgency icon"
                          />
                          <span className="font-semibold text-sm w-20">
                            Start Date
                          </span>
                        </div>
                        <span className="opacity-70 text-sm sm:ml-4">
                          : {item.startDate}
                        </span>
                      </div>
                      <div className="flex sm:flex-row sm:items-center mt-3">
                        <div className="flex items-center gap-2 mb-1 sm:mb-0 sm:w-24 md:w-32">
                          <Image
                            src="/urgency.png"
                            width={22}
                            height={20}
                            alt="urgency icon"
                          />
                          <span className="font-semibold text-sm w-20">
                            Duration
                          </span>
                        </div>
                        <span className="opacity-70 text-sm sm:ml-4">
                          : {item.duration}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Description and Date */}
                  {item.status === "pending" && (
                    <div className="mt-4 relative">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end">
                        <p className="text-sm text-gray-700 mb-2 sm:mb-0 pr-0 sm:pr-4 flex-1">
                          {item.description}
                        </p>
                        <span className="text-xs sm:text-sm opacity-60 whitespace-nowrap">
                          {item.date}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className={`w-full bg-white py-4  ${count}`}>
              <div className="flex justify-center items-center px-4">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-2 sm:px-4 py-2 mx-1 rounded-md text-sm ${
                    currentPage === 1
                      ? "bg-gray-200 cursor-not-allowed"
                      : "bg-[#FF6600] text-white hover:bg-[#E55A00]"
                  }`}
                >
                  <span className="hidden sm:inline">Previous</span>
                  <span className="sm:hidden">Prev</span>
                </button>

                <div className="flex mx-2 max-w-[200px] overflow-x-auto">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-2 sm:px-4 py-2 mx-1 rounded-md text-sm min-w-[32px] ${
                          currentPage === page
                            ? "bg-[#FF6600] text-white"
                            : "bg-gray-200 hover:bg-gray-300"
                        }`}
                      >
                        {page}
                      </button>
                    )
                  )}
                </div>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-2 sm:px-4 py-2 mx-1 rounded-md text-sm ${
                    currentPage === totalPages
                      ? "bg-gray-200 cursor-not-allowed"
                      : "bg-[#FF6600] text-white hover:bg-[#E55A00]"
                  }`}
                >
                  <span className="hidden sm:inline">Next</span>
                  <span className="sm:hidden">Next</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
