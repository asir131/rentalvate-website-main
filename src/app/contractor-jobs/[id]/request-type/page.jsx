"use client";
import React, { useState, useEffect } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const RequestType = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [id, setId] = useState(null);
  const [isRouterReady, setIsRouterReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const url = window.location.href;
    const extractedId = url.split("/")[4];
    setId(extractedId);
    setIsRouterReady(true);
  }, []);

  const handleGoBack = () => {
    if (isRouterReady) {
      router.back();
    } else {
      window.history.back();
    }
  };

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  const getButtonStyle = (buttonType) => {
    return activeButton === buttonType
      ? "bg-[#FFD0B0] border-[#FF9854] border-1"
      : "bg-[#FFF0E6]";
  };

  const handleNextClick = () => {
    if (!activeButton) {
      alert("Please select a request type before proceeding.");
      return;
    }

    if (!isRouterReady || !id) {
      console.log("Router not ready or ID not available");
      return;
    }

    switch (activeButton) {
      case "reimbursement":
        router.push(`/contractor-jobs/${id}/refund-request`);
        break;
      case "addMaterials":
        router.push(`/contractor-jobs/${id}/add-materials`);
        break;
      case "materialsPurchase":
        router.push(`/contractor-jobs/${id}/material-request`);
        break;
      case "emergencyFund":
        router.push(`/contractor-jobs/${id}/emergency-fund`);
        break;
      case "others":
        router.push(`/contractor-jobs/${id}/others`);
        break;
      default:
        console.log("Unknown request type:", activeButton);
    }
  };

  const isNextDisabled = !activeButton;

  return (
    <div className="h-screen">
      <div>
        <div
          onClick={handleGoBack}
          className="flex items-center cursor-pointer font-semibold text-lg mt-10 ml-5 md:ml-110 mb-5 md:mb-10"
        >
          <MdKeyboardArrowLeft size={30} className="align-middle mt-1" />
          Request Type
        </div>
        <div className="flex flex-col mx-10 md:mx-115">Select one</div>
        <div className="flex flex-col mx-10 md:mx-115 mt-10">
          <button
            onClick={() => handleButtonClick("addMaterials")}
            className={`text-center py-1 px-2 rounded-lg ${getButtonStyle(
              "addMaterials"
            )}`}
          >
            Add Materials
          </button>
          <button
            onClick={() => handleButtonClick("materialsPurchase")}
            className={`text-center py-1 px-2 rounded-lg mt-3 ${getButtonStyle(
              "materialsPurchase"
            )}`}
          >
            Materials Purchase
          </button>
          <button
            onClick={() => handleButtonClick("reimbursement")}
            className={`text-center py-1 px-2 rounded-lg mt-3 ${getButtonStyle(
              "reimbursement"
            )}`}
          >
            Reimbursement
          </button>
          <button
            onClick={() => handleButtonClick("emergencyFund")}
            className={`text-center py-1 px-2 rounded-lg mt-3 ${getButtonStyle(
              "emergencyFund"
            )}`}
          >
            Emergency Fund
          </button>
          <button
            onClick={() => handleButtonClick("others")}
            className={`text-center py-1 px-2 rounded-lg mt-3 ${getButtonStyle(
              "others"
            )}`}
          >
            Others
          </button>
        </div>
        <div className="flex justify-center mt-20 md:mt-40">
          <button
            onClick={handleNextClick}
            disabled={isNextDisabled}
            className={`text-center py-1 px-30 rounded-lg ${
              isNextDisabled
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-[#FF6600] text-white hover:bg-[#E55A00]"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestType;
