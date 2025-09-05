"use client";
import Image from "next/image";
import Link from "next/link";
import dummyMaintenanceRequests from "@/data/maintenanceRequests.js";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { GrCheckmark } from "react-icons/gr";
import RecommendContractor from "@/components/Modal/RecommendContractor";
import { FaCircle } from "react-icons/fa6";
import { use, useState } from "react";

export default function IssueDetailPage({ params }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSectionClick = () => {
    setIsModalOpen(true); // Open modal
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const [review, setReview] = useState(false);
  const { id } = use(params);
  const item = dummyMaintenanceRequests.find((item) => item.id === id);

  return (
    <div className="min-h-screen bg-gray-50 py-8 ">
      <div className=" max-w-5xl mx-2 md:mx-100 ">
        <div
          onClick={() => window.history.back()}
          className="cursor-pointer md:ml-15 flex items-center  md:mt-10   gap-2 text-xl font-semibold mb-4"
        >
          <MdKeyboardArrowLeft size={30} className="align-middle mt-1" />
          <h1 className="align-middle font-semibold">Job Overview</h1>
        </div>
        <div className="flex flex-col md:flex-row ">
          <div className="image-section mx-5 md:mx-0 flex gap-5 md:ml-20 md:w-2/3">
            <div className="flex flex-col gap-3">
              <Image
                src={item?.imageUrl[3]}
                alt={item.title}
                height={20}
                width={200}
              />
              <Image
                src={item?.imageUrl[1]}
                alt={item.title}
                height={30}
                width={150}
              />
              <Image
                src={item?.imageUrl[2]}
                alt={item.title}
                height={30}
                width={150}
              />
            </div>
            <div>
              {item?.imageUrl[1] && (
                <Image
                  src={item.imageUrl[1]}
                  alt=""
                  height={400}
                  width={600}
                  onError={(e) => (e.target.src = "/toolImgOne.png")}
                />
              )}
            </div>
          </div>

          <div className="md:w-1/3 md:ml-6 mx-5 md:mx-0 mt-5 md:mt-1">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-semibold ml-2">#{item.id}</h1>
              <div className="flex  items-center gap-20">
                <p className="flex items-center gap-1 ml-2 w-10 md:w-10">
                  <Image src="/issue.png" width={15} height={15} alt="" />
                  <span className="font-semibold">Issue </span>
                </p>{" "}
                <span className="opacity-70"> : {item.title}</span>
              </div>
              <div className="flex items-center gap-20">
                <p className="flex items-center gap-1 ml-2 w-10 md:w-10">
                  <Image src="/category.png" width={15} height={15} alt="" />
                  <span className="font-semibold">Category </span>
                </p>{" "}
                <span className="opacity-70"> : {item.category}</span>
              </div>
              <div className="flex items-center gap-20">
                <p className="flex items-center gap-1 ml-2 w-10 md:w-10">
                  <Image src="/deadline.png" width={15} height={15} alt="" />
                  <span className="font-semibold">Deadline </span>
                </p>{" "}
                <span className="opacity-70"> : {item.deadline}</span>
              </div>
              <div className="flex items-center gap-20">
                <p className="flex items-center gap-2 ml-2 w-10 md:w-10">
                  <Image src="/urgency.png" width={15} height={15} alt="" />
                  <span className="font-semibold">Urgency </span>
                </p>{" "}
                <span className="opacity-70">
                  {" "}
                  : {item.urgency ? "Yes" : "No"}
                </span>
              </div>
            </div>
            {item.status == "pending" && (
              <div className="mt-3">
                <span className="ml-2 mt-3 bg-[#FEE9DC] text-[#E85D00] font-semibold  px-10 rounded-3xl">
                  Approved
                </span>
              </div>
            )}
            {item.status == "in-progress" && (
              <div className="mt-3">
                {item.statusOption === "approved" && (
                  <div className=" text-sm w-full top-40 md:top-28 flex justify-between items-center ">
                    <span className="ml-2 mt-3 bg-[#FEE9DC] text-[#E85D00] font-semibold  px-10 rounded-3xl">
                      Approved
                    </span>
                  </div>
                )}
                {/* Arrived  */}
                {item.statusOption === "arrived" && (
                  <div className=" text-sm w-full top-40 md:top-28 flex justify-between items-center ">
                    <span className="flex  items-center gap-2 ml-2 mt-3 bg-[#FEE9DC] text-[#00881D] font-semibold  px-6 rounded-3xl">
                      <FaCircle />
                      Arrived
                    </span>
                  </div>
                )}
                {/* Departed  */}
                {item.statusOption === "departed" && (
                  <div className=" text-sm w-full top-40 md:top-28 flex justify-between items-center ">
                    <span className="flex  items-center gap-2 ml-2 mt-3 bg-[#FEE9DC] text-[#E94C4C] font-semibold  px-6 rounded-3xl">
                      <FaCircle />
                      Departed
                    </span>
                    <span className="bg-transparent mt-2 backdrop-blur-sm mr-2  text-xs border  border-white rounded-2xl px-5">
                      #{item.id}
                    </span>
                  </div>
                )}
                {/* En Route  */}
                {item.statusOption === "en route" && (
                  <div className=" text-sm w-full top-40 md:top-28 flex justify-between items-center ">
                    <span className="flex  items-center gap-2 ml-2 mt-3 bg-[#FEE9DC] text-[#D9C000] font-semibold  px-6 rounded-3xl">
                      <FaCircle />
                      En Route
                    </span>
                  </div>
                )}
                {/* mark complete  */}
                {item.statusOption === "mark complete" && (
                  <div className=" text-sm w-full top-40 md:top-28 flex justify-between items-center ">
                    <span className="ml-2 flex  text-[#3586FF] justify-center items-center gap-2 mt-3 bg-[#FEF4DA]  font-semibold  px-3 rounded-3xl">
                      <GrCheckmark
                        className=""
                        style={{ fontSize: "20px", fontWeight: "bold" }}
                      />
                      Mark Complete
                    </span>
                  </div>
                )}

                {/* Assigned */}
                {item.statusOption === "assigned" && (
                  <div className=" text-sm w-full top-40 md:top-28 flex justify-between items-center ">
                    <span className="ml-2   flex  justify-center items-center gap-5 mt-3 bg-[#FEF4DA] text-[#FF6600] font-semibold  px-5 rounded-3xl">
                      <Image
                        src="/assigned.png"
                        alt=""
                        width={15}
                        height={15}
                      />{" "}
                      Assigned
                    </span>
                  </div>
                )}
                {/* Completed  */}
                {item.statusOption === "completed" && (
                  <div className=" text-sm w-full top-40 md:top-28 flex justify-between items-center ">
                    <span className="flex  items-center gap-2 ml-2 mt-3 bg-[#FEE9DC] text-[#00881D] font-semibold  px-6 rounded-3xl">
                      Completed
                    </span>
                  </div>
                )}
                {/* Awaiting review  */}
                {item.statusOption === "awaiting review" && (
                  <div className=" text-sm w-full top-40 md:top-28 flex justify-between items-center ">
                    <span className="flex  items-center gap-2 ml-2 mt-3 bg-[#FEF4DA] text-[#877C00] font-semibold  px-6 rounded-3xl">
                      Awaiting Review
                    </span>
                  </div>
                )}
                {/* Reviewed  */}
                {item.statusOption === "reviewed" && (
                  <div className=" text-sm w-full top-40 md:top-28 flex justify-between items-center ">
                    <span className="flex  items-center gap-2 ml-2 mt-3 bg-[#F3FFE9] text-[#056300] font-semibold  px-6 rounded-3xl">
                      Reviewed
                    </span>
                  </div>
                )}
                <div className="contractor-info my-5 ml-2">
                  <h1 className="my-2 font-semibold">Contactor Info</h1>
                  <div className="flex justify-between">
                    <div className="flex  gap-5 mr-2">
                      <div className="">
                        <Image
                          src="/contractorImg.png"
                          alt=""
                          width={60}
                          height={60}
                        />
                      </div>
                      <div>
                        <h1 className="font-semibold">{item.assignedTo}</h1>
                        <p className="text-xs">Plumber</p>
                        <span className="flex items-center justify-center gap-2">
                          <FaStar className="text-orange-300" />
                          4.8 (212 reviews)
                        </span>
                      </div>
                    </div>
                    <div
                      className="bg-[#FFF0E6] rounded-full p-2 w-10 h-10 flex justify-center items-center"
                      style={{
                        boxShadow: "inset 0 0 5px rgba(100, 100, 100,0.5 )",
                      }}
                    >
                      <IoChatboxEllipses
                        size={25}
                        className="text-orange-400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {item.status == "completed" && (
              <div className="mt-3">
                {review ? (
                  <span className="ml-2 flex w-2/3 text-[#877C00] justify-center items-center gap-2 mt-3 bg-[#FEF4DA]  font-semibold  px-3 rounded-3xl">
                    Awaiting Review
                  </span>
                ) : (
                  <span className="ml-2 flex w-2/3 text-[#3586FF] justify-center items-center gap-2 mt-3 bg-[#FEF4DA]  font-semibold  px-3 rounded-3xl">
                    <GrCheckmark
                      className="font-bold"
                      style={{ fontSize: "20px", fontWeight: "bold" }}
                    />
                    Mark Complete
                  </span>
                )}
                <div className="contractor-info my-5 ml-2">
                  <h1 className="my-2 font-semibold">Contactor Info</h1>
                  <div className="flex justify-between">
                    <div className="flex  gap-5 mr-2">
                      <div className="">
                        <Image
                          src="/contractorImg.png"
                          alt=""
                          width={60}
                          height={60}
                        />
                      </div>
                      <div>
                        <h1 className="font-semibold">{item.assignedTo}</h1>
                        <p className="text-xs">Plumber</p>
                        <span className="flex items-center justify-center gap-2">
                          <FaStar className="text-orange-300" />
                          4.8 (212 reviews)
                        </span>
                      </div>
                    </div>
                    <div
                      className="bg-[#FFF0E6] rounded-full p-2 w-10 h-10 flex justify-center items-center"
                      style={{
                        boxShadow: "inset 0 0 5px rgba(100, 100, 100,0.5 )",
                      }}
                    >
                      <IoChatboxEllipses
                        size={25}
                        className="text-orange-400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="relative ">
              <p className="text-sm flex flex-col mx-2 my-1 w-80 md:w-150 mb-5">
                <span className="font-semibold text-xl my-1">Description</span>
                {item.description}
              </p>
            </div>
          </div>
        </div>
        {item.status == "pending" && (
          <div className="flex flex-col md:ml-50 gap-2 items-center justify-center mt-15">
            <Link
              href={`/jobs/${id}/inspection`}
              className="border border-[#E85D00] text-white bg-[#E85D00] hover:bg-orange-700 py-2 px-25 rounded-xl font-semibold text-md"
            >
              Inspection Request
            </Link>
            <button
              onClick={handleSectionClick}
              className="border border-[#E85D00] text-[#E85D00] hover:bg-[#E85D00] hover:text-white  py-2 px-21 rounded-xl font-semibold text-md"
            >
              Recommend Contactor
            </button>
          </div>
        )}
        {item.status == "completed" &&
          (review ? (
            <div className="flex flex-col md:ml-50 gap-2 items-center justify-center mt-15">
              <Link
                href={`/jobs/${id}/review`}
                className="border border-[#E85D00] text-white bg-[#E85D00] hover:bg-orange-700 py-2 px-20 md:px-35 rounded-xl font-semibold text-md"
              >
                Review
              </Link>
            </div>
          ) : (
            <div className="flex flex-col md:ml-50 gap-2 items-center justify-center mt-15">
              <div className="mx-8 md:mx-0   text-md">
                The Contactor has marked this job as completed. Do you agree
                that the job has been successfully completed?
              </div>
              <div className="mx-10 md:mx-0 font-semibold text-md mt-5 flex gap-5">
                <button className="bg-[#C0C0C0] hover:bg-[#a09e9e] py-2 px-15 rounded-lg">
                  No
                </button>
                <button
                  onClick={() => setReview(true)}
                  className="bg-[#FF6600] hover:bg-[#eb6003] text-white py-2 px-15 rounded-lg"
                >
                  Yes
                </button>
              </div>
            </div>
          ))}
      </div>
      <RecommendContractor isOpen={isModalOpen} close={handleCloseModal} />
    </div>
  );
}
