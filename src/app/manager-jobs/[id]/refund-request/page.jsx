"use client";
import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/navigation";
const RefundRequest = () => {
   const router = useRouter();
  const handleGoBack = () => {
    window.history.back();
  };

  const bid = true;
  return (
    <div className="">
      <div
        onClick={handleGoBack}
        className="flex items-center cursor-pointer font-semibold text-lg mt-10 ml-5 md:ml-110 md:mb-10"
      >
        <MdKeyboardArrowLeft size={30} className="align-middle mt-1" />
        Send Refund Request
      </div>
      <div className=" text-center">
        <p className="text-xs mx-10 md:mx-0 opacity-55">
          If you believe a refund is necessary, you can request it here. Keep it
          simple and professional — the other party will review your request and
          respond accordingly.
        </p>
      </div>
      <div className=" text-center md:mx-100">
        <div>
          <p className="flex justify-start ml-12 md:ml-35 mt-8 md:mt-13">
            Refund Amount ($)
          </p>
          <input
            type="text"
            className="border border-slate-300 outline-none w-3/4 py-2 px-3 rounded-lg"
            placeholder="Enter amount here"
          />
        </div>
      </div>
      <div className=" text-center md:mx-100">
        <div>
          <p className="flex justify-start ml-12 md:ml-35 mt-8 md:mt-13">
            Note / Reason for Refund
          </p>
          <input
            type="text"
            className="border border-slate-300 pb-30 outline-none w-3/4 py-2 px-3 rounded-lg"
            placeholder="Explain why you're requesting this refund"
          />
        </div>

        <div className="flex justify-end text-xs opacity-55 mr-15 md:mr-35">
          Max 500Characters
        </div>
        <div>
          <button onClick={()=>router.push("/")} className="bg-[#FF6600] text-white font-semibold py-1 px-20 md:px-30 rounded-lg mt-10">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default RefundRequest;
