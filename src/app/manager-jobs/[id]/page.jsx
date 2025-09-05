"use client";
import Image from "next/image";
import Link from "next/link";
import dummyMaintenanceRequests from "@/data/managerJobData";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { GrCheckmark } from "react-icons/gr";
import RecommendContractor from "@/components/Modal/RecommendContractor";
import { FaCircle } from "react-icons/fa6";
import { use, useState } from "react";
import MaterialOrRefundRequest from "@/components/MaterialRequest/MaterialOrRefundRequest";
import ManagersReview from "@/components/MaterialRequest/ManagersReview";
import { useRouter } from "next/navigation";
export default function IssueDetailPage({ params }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSectionClick = () => {
    setIsModalOpen(true); // Open modal
  };
 const router = useRouter();
  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const [review, setReview] = useState(false);
  const { id } = use(params);
  const item = dummyMaintenanceRequests.find((item) => item.id === id);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-2 md:mx-100">
        <div
          onClick={() => window.history.back()}
          className="cursor-pointer flex items-center  md:mt-10   gap-2 text-xl font-semibold mb-4"
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
              <h1 className="text-lg font-medium ml-2">#{item.id}</h1>
              <div className="flex  items-center gap-20">
                <p className="flex items-center gap-1 ml-2 w-10 md:w-10">
                  <Image src="/issue.png" width={18} height={15} alt="" />
                  <span className="font-semibold">Issue </span>
                </p>{" "}
                <span className="opacity-70 text-sm"> : {item.title}</span>
              </div>
              <div className="flex items-center gap-20">
                <p className="flex items-center gap-1 ml-2 w-10 md:w-10">
                  <Image src="/category.png" width={20} height={15} alt="" />
                  <span className="font-semibold">Category </span>
                </p>{" "}
                <span className="opacity-70"> : {item.category}</span>
              </div>
              <div className="flex items-center gap-20">
                <p className="flex items-center gap-1 ml-2 w-10 md:w-10">
                  <Image src="/deadline.png" width={18} height={15} alt="" />
                  <span className="font-semibold">Deadline </span>
                </p>{" "}
                <span className="opacity-70"> : {item.deadline}</span>
              </div>
              <div className="flex items-center gap-20">
                <p className="flex items-center gap-2 ml-2 w-10 md:w-10">
                  <Image src="/urgency.png" width={20} height={15} alt="" />
                  <span className="font-semibold">Urgency </span>
                </p>{" "}
                <span className="opacity-70">
                  {" "}
                  : {item.urgency ? "Yes" : "No"}
                </span>
              </div>

              {item.status === "active post" ? (
                <div className="flex items-center gap-20">
                  <p className="flex items-center gap-1 ml-2 w-10 md:w-10">
                    <Image src="/coin.png" width={18} height={15} alt="" />
                    <span className="font-semibold">Price </span>
                  </p>{" "}
                  <span className="opacity-70"> : {item.price}</span>
                </div>
              ) : (
                <div className="flex items-center gap-20">
                  <p className="flex items-center gap-1 ml-2 w-10 md:w-10">
                    <Image src="/coin.png" width={18} height={15} alt="" />
                    <span className="font-semibold">Price </span>
                  </p>{" "}
                  <span className="opacity-70"> : {item.quotedPrice}</span>
                </div>
              )}
            </div>
            <div>
              {/* Arrived  */}
              {item.statusOption === "arrived" && (
                <div className=" text-sm w-full top-40 md:top-28 flex justify-between items-center ">
                  <span className="flex  items-center gap-2 ml-2 mt-3 bg-[#FEE9DC] text-[#00881D] font-semibold  px-6 rounded-3xl">
                    <FaCircle />
                    Arrived
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
                    <Image src="/assigned.png" alt="" width={15} height={15} />{" "}
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
            </div>
            <div className="relative ">
              <p className="text-sm flex flex-col mx-2  w-80 md:w-150 ">
                <span className="font-medium text-lg my-1">Description</span>
                {item.description}
              </p>

              {item.status === "active post" && (
                <div className="ml-2">
                  <h1 className="font-semibold">Requester Info</h1>
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
                      <h1 className="font-semibold">
                        {item.requesterInfo.name}
                      </h1>
                      <h1>{item.requesterInfo.location}</h1>
                    </div>
                  </div>
                </div>
              )}
              {(item.statusOption === "arrived" ||
                item.statusOption === "mark complete" ||
                item.statusOption === "assigned" ||
                item.statusOption === "en route" ||
                item.statusOption === "completed") && (
                <div>
                  <div className="contractor-info my-5 ml-2">
                    <h1 className="my-2 font-semibold text-xs">
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
                          <h1 className="font-semibold">{item.assignedTo}</h1>
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
                    <h1 className="my-2 font-semibold text-xs">Tenant Info</h1>
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
      {item.statusOption === "bid" && (
        <div className="flex gap-3 justify-center text-center mt-10 md:mt-20 md:ml-40">
          <button className="bg-[#EBEBEB] font-semibold py-2 px-8 rounded-lg">
            Decline Post
          </button>
          <Link
            href="/manager-jobs/bid-list"
            className="bg-[#FF6600] text-white font-semibold py-2 px-10 rounded-lg"
          >
            View bid
          </Link>
        </div>
      )}
      {item.statusOption === "proposal" && (
        <div className="flex gap-3 justify-center text-center mt-10 md:mt-20 md:ml-40">
          <button className="bg-[#EBEBEB] font-semibold py-2 px-8 rounded-lg">
            Decline Post
          </button>
          <Link
            href="/manager-jobs/accepted-proposal"
            className="bg-[#FF6600] text-white font-semibold py-2 px-10 rounded-lg"
          >
            Accepted proposal
          </Link>
        </div>
      )}
      {item.statusOption === "arrived" && (
        <div className="flex gap-3 justify-center text-center mt-10 md:mt-20 md:ml-40">
          <MaterialOrRefundRequest id={item.id} />
        </div>
      )}
      {(item.statusOption === "mark complete" ||
        item.statusOption === "completed") && (
        <div className="flex gap-3 justify-center text-center mt-10 md:mt-20 md:ml-40">
          <ManagersReview />
        </div>
      )}
      {item.statusOption === "mark complete" && (
        <div className="flex gap-3 justify-center text-center mt-5 md:mt-8 md:ml-40">
          <button className="bg-[#1A1F36] text-white py-1 px-10 rounded-lg font-semibold">
            Incomplete
          </button>
          <button onClick={()=>router.push("/")} className="bg-[#FF6600] text-white py-1 px-14 rounded-lg font-semibold">
            Confirm
          </button>
        </div>
      )}
      {item.statusOption === "completed" && (
        <div className="flex gap-3 justify-center text-center mt-5 md:mt-8 md:ml-40">
          <Link
            href={`/manager-jobs/${item.id}/review`}
            className="bg-[#FF6600] text-white py-1 px-30 rounded-lg font-semibold"
          >
            Review
          </Link>
        </div>
      )}
      <RecommendContractor isOpen={isModalOpen} close={handleCloseModal} />
    </div>
  );
}
