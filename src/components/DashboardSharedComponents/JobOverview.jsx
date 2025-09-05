"use client";
import Image from "next/image";
import RouteTitle from "../RouteTitle/RouteTitle";

import { useState } from "react";

import dummyMaintenanceRequests from "@/data/maintenanceRequests";
import { useParams } from "next/navigation";
import JobOverviewBottomButtons from "./JobOverviewBottomButtons";

const JobOverview = ({flag}) => {
  const params = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSectionClick = () => {
    setIsModalOpen(true); // Open modal
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const [review, setReview] = useState(false);

  const item = dummyMaintenanceRequests.find((item) => item.id === params.id);
  console.log("Id is :", item);
  return (
    <section className="max-w-7xl mx-auto">
      <RouteTitle titleName={"Job Overview"} />
      <div className=" max-w-5xl mx-2 ">
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
                <span className="ml-2 flex w-1/2 justify-center items-center gap-5 mt-3 bg-[#FEF4DA] text-[#FF6600] font-semibold  px-5 rounded-3xl">
                  <Image src="/assigned.png" alt="" width={15} height={15} />{" "}
                  Assigned
                </span>
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
      </div>
      <JobOverviewBottomButtons flag={flag}/>
    </section>
  );
};

export default JobOverview;
