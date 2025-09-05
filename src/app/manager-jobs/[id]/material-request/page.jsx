"use client";
import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/navigation";
const MaterialRequest = () => {
   const router = useRouter();
  const data = [
    { itemName: "PVC Pipe", modelNo: "A5w23 d", quantity: 3, totalCost: 25 },
    { itemName: "PVC Pipe", modelNo: "A5w23 d", quantity: 3, totalCost: 25 },
    { itemName: "PVC Pipe", modelNo: "A5w23 d", quantity: 3, totalCost: 25 },
    { itemName: "PVC Pipe", modelNo: "A5w23 d", quantity: 3, totalCost: 25 },
    { itemName: "PVC Pipe", modelNo: "A5w23 d", quantity: 3, totalCost: 25 },
    { itemName: "PVC Pipe", modelNo: "A5w23 d", quantity: 3, totalCost: 25 },
  ];
  const handleGoBack = () => {
    window.history.back();
  };

  const bid = true;
  return (
    <div className=" md:mx-100">
      <div
        onClick={handleGoBack}
        className="flex items-center cursor-pointer font-semibold text-lg mt-10 ml-5 md:ml-10 md:mb-10"
      >
        <MdKeyboardArrowLeft size={30} className="align-middle mt-1" />
        Material Request
      </div>
      <div>
        <div className="md:flex grid gap-5 justify-between mx-10 md:mx-20">
          <p>
            Request Type :{" "}
            <span className="opacity-65">Materials Purchase</span>
          </p>
          <button className="border border-[#FF6600] px-8 py-1 rounded-lg">
            View Receipt or photo
          </button>
        </div>
      </div>
      <div className="md:mx-20 mx-5">
        <h1 className="ml-5 mt-5 md:ml-2 mb-5">Material List :</h1>
        <div className="overflow-x-auto max-w-full border border-slate-100 rounded-lg">
          <table className="min-w-full table-auto ">
            <thead className="bg-[#FFF0E6]">
              <tr>
                <th className="px-4 py-2 text-left font-semibold text-sm">
                  Item Name
                </th>
                <th className="px-4 py-2 text-left font-semibold text-sm">
                  Model/Item No.
                </th>
                <th className="px-4 py-2 text-left font-semibold text-sm">
                  Quantity
                </th>
                <th className="px-4 py-2 text-left font-semibold text-sm">
                  Total Cost
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2 text-sm">{row.itemName}</td>
                  <td className="px-4 py-2 text-sm">{row.modelNo}</td>
                  <td className="px-4 py-2 text-sm">{row.quantity}</td>
                  <td className="px-4 py-2 text-sm">${row.totalCost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="md:mx-20 mx-5 mt-10">
        <div className="flex justify-between border-b border-b-slate-200">
          <p>Total Item</p>
          <p>04</p>
        </div>
        <div className="flex justify-between mt-4 text-[#00986C] font-semibold">
          <p>Total Price</p>
          <p>$176</p>
        </div>
      </div>
      <div className="md:mx-20 mx-5 mt-5">
        <h1 className="font-semibold">Note (Optional)</h1>
        <p className="text-xs opacity-55">
          Requesting additional tiles for the kitchen flooring. The current
          stock is not sufficient to complete the layout as per the revised
          measurements. I’ve attached the updated layout plan for reference.
          Please review and approve at your earliest convenience so we can avoid
          delays in the timeline.
        </p>
      </div>
      <div className="flex justify-center mt-15 gap-2">
        <button className="text-white bg-[#1A1F36] rounded-lg py-1 px-15">
          Decline
        </button>
        <button onClick={()=>router.push("/")} className="text-white bg-[#FF6600] rounded-lg py-1 px-15">
          Approve
        </button>
      </div>
    </div>
  );
};

export default MaterialRequest;
