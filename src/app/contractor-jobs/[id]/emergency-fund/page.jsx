"use client";
import React, { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/navigation";
const EmergencyFund = () => {
   const router = useRouter();
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleGoBack = () => {
    window.history.back();
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  return (
    <div className="h-screen mb-10">
      <div
        onClick={handleGoBack}
        className="flex items-center cursor-pointer font-semibold text-lg mt-10 ml-5 md:ml-110 md:mb-10"
      >
        <MdKeyboardArrowLeft size={30} className="align-middle mt-1" />
        Money Request
      </div>
      <div className="flex justify-center mt-20 mr-20 md:mr-192">
        <p className="font-semibold">Request Type :</p>
        <span className="opacity-55">Emergency Fund</span>
      </div>
      <div className=" text-center md:mx-75">
        <div>
          <p className="flex font-semibold mb-5 justify-start ml-12 md:ml-40 mt-8 md:mt-5">
            Amount ($)
          </p>
          <input
            type="text"
            className="border border-slate-300 outline-none w-3/4 py-2 px-3 rounded-lg"
            placeholder="Enter amount here"
          />
        </div>
      </div>

      {/* Upload receipts or photos section */}
      <div className="text-center md:mx-75">
        <div>
          <p className="flex font-semibold mb-5 justify-start ml-12 md:ml-40 mt-8 md:mt-5">
            Upload receipts or photos (optional)
          </p>
          <div className="relative w-3/4 mx-auto">
            <input
              type="file"
              multiple
              accept="image/*,.pdf"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              id="fileUpload"
            />
            <div className="border border-slate-300 py-8 px-3 rounded-lg bg-gray-50 flex flex-col items-center justify-center">
              <div className="mb-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18V16H17V18H7ZM12 14L7 9L8.4 7.6L11 10.2V2H13V10.2L15.6 7.6L17 9L12 14Z"
                    fill="#9CA3AF"
                  />
                </svg>
              </div>
              <p className="text-gray-500 text-sm">PDF or photo</p>
            </div>
            {selectedFiles.length > 0 && (
              <div className="mt-2 text-left text-xs text-gray-600">
                {selectedFiles.map((file, index) => (
                  <div key={index}>{file.name}</div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className=" text-center md:mx-75">
        <div>
          <p className="flex font-semibold mb-5 justify-start ml-12 md:ml-40 mt-8 md:mt-5">
            Description
          </p>
          <input
            type="text"
            className="border border-slate-300 pb-30 outline-none w-3/4 py-2 px-3 rounded-lg"
            placeholder="Describe why you are requesting this payment…"
          />
        </div>

        <div className="flex justify-end text-xs opacity-55 mr-15 md:mr-42">
          Max 500Characters
        </div>
        <div>
          <button onClick={()=>router.push("/")} className="bg-[#FF6600] cursor-pointer text-white font-semibold py-1 px-20 md:px-30 rounded-lg mt-10 ">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmergencyFund;
