"use client";
import Image from "next/image";
import Link from "next/link";
import contractorJobData from "@/data/contractorJobData";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { GrCheckmark } from "react-icons/gr";
import RecommendContractor from "@/components/Modal/RecommendContractor";
import { FaCircle } from "react-icons/fa6";
import { use, useState } from "react";
import MaterialOrRefundRequest from "@/components/MaterialRequest/MaterialOrRefundRequest";
import ManagersReview from "@/components/MaterialRequest/ManagersReview";
import { FaLocationDot } from "react-icons/fa6";

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
  const item = contractorJobData.find((item) => item.id === id);

  return (
    <div className="min-h-screen bg-gray-50 py-8 flex flex-col justify-start">
      <div className="max-w-5xl mx-2 md:mx-100">
        <div
          onClick={() => window.history.back()}
          className="cursor-pointer flex items-center md:mt-10 gap-2 text-base font-medium mb-3"
        >
          <MdKeyboardArrowLeft size={25} className="align-middle mt-1" />
          <h1 className="align-middle font-medium">Job Overview</h1>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="image-section mx-5 md:mx-0 flex gap-4 md:ml-20 md:w-2/3">
            <div className="flex flex-col gap-2">
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

          <div className="md:w-100 md:ml-6 mx-5 md:mx-0 mt-5 md:mt-1">
            <div className="flex flex-col gap-2">
              <h1 className="text-lg font-medium ml-2">#{item.id}</h1>
              <div className="flex items-center gap-4">
                <p className="flex items-center gap-1 ml-2 w-30 md:w-30">
                  <Image src="/issue.png" width={18} height={15} alt="" />
                  <span className="font-medium">Issue </span>
                </p>
                <span className="opacity-70 text-sm">: {item.title}</span>
              </div>
              <div className="flex items-center gap-4">
                <p className="flex items-center gap-1 ml-2 w-30 md:w-30">
                  <Image src="/category.png" width={20} height={15} alt="" />
                  <span className="font-medium">Category </span>
                </p>
                <span className="opacity-70">: {item.category}</span>
              </div>
              <div className="flex items-center gap-4">
                <p className="flex items-center gap-1 ml-2 w-30 md:w-30">
                  <FaLocationDot />
                  <span className="font-medium">Location </span>
                </p>
                <span className="opacity-70 w-35 md:w-60">
                  : {item.location}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <p className="flex items-center gap-1 ml-2 w-30 md:w-30">
                  <Image src="/deadline.png" width={18} height={15} alt="" />
                  <span className="font-medium">Start Date </span>
                </p>
                <span className="opacity-70">: {item.startDate}</span>
              </div>
              <div className="flex items-center gap-4">
                <p className="flex items-center gap-2 ml-2 w-30 md:w-30">
                  <Image src="/urgency.png" width={20} height={15} alt="" />
                  <span className="font-medium">Duration </span>
                </p>
                <span className="opacity-70">: {item.duration}</span>
              </div>
              <div className="flex items-center gap-4">
                <p className="flex items-center gap-1 ml-2 w-30 md:w-30">
                  <Image src="/coin.png" width={18} height={15} alt="" />
                  <span className="font-medium">Quoted Price </span>
                </p>
                <span className="opacity-70">: {item.quotedPrice}</span>
              </div>
            </div>

            <div>
              {/* Arrived  */}
              {item.statusOption === "arrived" && (
                <div className="text-sm w-full top-40 md:top-28 flex justify-between items-center ">
                  <span className="flex items-center gap-2 ml-2 mt-3 bg-[#FEE9DC] text-[#00881D] font-medium  px-6 rounded-3xl">
                    <FaCircle />
                    Arrived
                  </span>
                </div>
              )}
              {/* Departed  */}
              {item.statusOption === "departed" && (
                <div className="text-sm w-full top-40 md:top-28 flex justify-between items-center ">
                  <span className="flex items-center gap-2 ml-2 mt-3 bg-[#FEE9DC] text-[#E94C4C] font-medium  px-6 rounded-3xl">
                    <FaCircle />
                    Departed
                  </span>
                </div>
              )}
              {/* En Route  */}
              {item.statusOption === "en route" && (
                <div className="text-sm w-full top-40 md:top-28 flex justify-between items-center ">
                  <span className="flex items-center gap-2 ml-2 mt-3 bg-[#FEE9DC] text-[#D9C000] font-medium  px-6 rounded-3xl">
                    <FaCircle />
                    En Route
                  </span>
                </div>
              )}
              {/* mark complete  */}
              {item.statusOption === "mark complete" && (
                <div className="text-sm w-full top-40 md:top-28 flex justify-between items-center ">
                  <span className="ml-2 flex text-[#3586FF] justify-center items-center gap-2 mt-3 bg-[#FEF4DA] font-medium  px-3 rounded-3xl">
                    <GrCheckmark className="" style={{ fontSize: "20px" }} />
                    Mark Complete
                  </span>
                </div>
              )}

              {/* Assigned */}
              {item.statusOption === "assigned" && (
                <div className="text-sm w-full top-40 md:top-28 flex justify-between items-center ">
                  <span className="ml-2 flex justify-center items-center gap-5 mt-3 bg-[#FEF4DA] text-[#FF6600] font-medium  px-5 rounded-3xl">
                    <Image src="/assigned.png" alt="" width={15} height={15} />{" "}
                    Assigned
                  </span>
                </div>
              )}
              {/* Completed  */}
              {item.statusOption === "completed" && (
                <div className="text-sm w-full top-40 md:top-28 flex justify-between items-center ">
                  <span className="flex items-center gap-2 ml-2 mt-3 bg-[#FEE9DC] text-[#00881D] font-medium  px-6 rounded-3xl">
                    Completed
                  </span>
                </div>
              )}
            </div>

            <div className="relative ">
              <p className="text-sm flex flex-col mx-2 w-80 md:w-150 ">
                {item.status == "assigned job" && (
                  <div>
                    {" "}
                    <span className="font-medium text-lg my-1">
                      Description
                    </span>
                    {item.description}
                  </div>
                )}
              </p>

              {item.status === "active post" && (
                <div className="ml-2">
                  <h1 className="font-medium">Requester Info</h1>
                  <div className="flex gap-3 mt-2">
                    <div>
                      <Image
                        src={item.requesterInfo.image}
                        alt=""
                        width={40}
                        height={30}
                      />
                    </div>
                    <div>
                      <h1 className="font-medium">{item.requesterInfo.name}</h1>
                      <h1>{item.requesterInfo.location}</h1>
                    </div>
                  </div>
                </div>
              )}
              {(item.statusOption === "arrived" ||
                item.statusOption === "mark complete" ||
                item.statusOption === "assigned" ||
                item.statusOption === "en route" ||
                item.statusOption === "completed" ||
                item.statusOption === "departed") && (
                <div>
                  <div className="contractor-info my-5 ml-2">
                    <h1 className="my-2 font-medium text-xs">
                      Contractor Info
                    </h1>
                    <div className="flex justify-between">
                      <div className="flex gap-5 mr-2">
                        <div>
                          <Image
                            src="/contractorImg.png"
                            alt=""
                            width={50}
                            height={50}
                          />
                        </div>
                        <div>
                          <h1 className="font-medium">{item.assignedTo}</h1>
                          <p className="text-xs">Plumber</p>
                          <span className="flex items-center justify-center gap-2 text-xs">
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

                  <div className="contractor-info my-5 ml-2">
                    <h1 className="my-2 font-medium text-xs">Tenant Info</h1>
                    <div className="flex justify-between">
                      <div className="flex gap-5 mr-2">
                        <div>
                          <Image
                            src="/contractorImg.png"
                            alt=""
                            width={50}
                            height={60}
                          />
                        </div>
                        <div>
                          <h1 className="font-medium">{item.assignedTo}</h1>
                          <p className="text-xs">
                            Greenfield Apartments, Unit 302
                          </p>
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
            </div>
          </div>
        </div>
      </div>
      {item.statusOption === "assigned" && (
        <div className="flex flex-col w-full gap-3 justify-center items-center text-center mt-10 md:mt-10 md:ml-20 h-full">
          <Link
            href={`/contractor-jobs/${id}/request-type`}
            className="bg-white text-[#FF6600] border border-[#FF6600] w-70  md:w-80 font-semibold py-2 px-8 rounded-lg"
          >
            Add Materials
          </Link>
          <Link
            href="/"
            className="bg-[#FF6600] w-70  md:w-80 text-white font-medium py-2 px-10 rounded-lg"
          >
            En Route
          </Link>
        </div>
      )}
      <div className="flex justify-center mx-10 md:mx-0">
        {item.status === "bided job" && (
          <div className="flex flex-col px-2  md:w-250 py-10  text-xs gap-3 border opacity-65 border-[#CACACA] justify-center items-center mt-10 md:mt-15 md:ml-20 h-full">
            <p>
              Hello Dear , <br />I came across your project listing for and
              would love the opportunity to assist you. Based on your project
              description, here’s how I can help: Experience & Skills: I have
              over [X years] of experience in and hold Approach to Your Project:
              My approach involves Proposed Timeline: I can complete this
              project within [specific timeline]. Estimated Price: My bid for
              this project is [specific amount or range, depending on client’s
              preferences]. If you’d like, I can provide references, previous
              work samples, or address any specific questions you may have about
              my approach. I am confident that I can deliver results that meet
              and exceed your expectations. Looking forward to collaborating
              with you!
            </p>
          </div>
        )}
      </div>

      {(item.statusOption === "arrived" ||
        item.statusOption === "departed") && (
        <div className="flex flex-col w-full gap-3 justify-center items-center text-center mt-10 md:mt-10 md:ml-20 h-full">
          <div className="flex gap-2">
            <Link
              href={`/contractor-jobs/${id}/request-type`}
              className="bg-white text-[#FF6600] border border-[#FF6600] w-22 text-center md:w-28 font-semibold py-2 rounded-lg"
            >
              Refund
            </Link>
            <Link
              href={`/contractor-jobs/${id}/request-type`}
              className="bg-white text-[#FF6600] border border-[#FF6600] w-45 md:w-50 font-semibold py-2 px-8 rounded-lg"
            >
              Money Request
            </Link>
          </div>
          <Link
            href={`/contractor-jobs/${id}/upload-image`}
            className="bg-[#FF6600] w-70 md:w-80 text-white font-medium py-2 px-10 rounded-lg"
          >
            Mark Complete
          </Link>
        </div>
      )}

      <RecommendContractor isOpen={isModalOpen} close={handleCloseModal} />
    </div>
  );
}
