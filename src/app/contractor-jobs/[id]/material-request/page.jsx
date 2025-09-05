"use client";
import React, { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/navigation";
const MaterialRequest = () => {
   const router = useRouter();
  const [note, setNote] = useState("");
  const maxLength = 50;
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
    <div className="h-screen md:mx-100">
      <div
        onClick={handleGoBack}
        className="flex items-center cursor-pointer font-semibold text-lg mt-10 ml-5 md:ml-10 md:mb-10"
      >
        <MdKeyboardArrowLeft size={30} className="align-middle mt-1" />
        Add Materials Cost Request
      </div>
      <div></div>
      <div className="md:mx-20 mx-5">
        <h1 className="ml-5 mt-5 md:ml-2 mb-5 md:mt-20">Material List :</h1>
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
        <div className="w-full mx-auto p-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Note (Optional)
            </label>
            <div className="relative">
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Write a short message"
                maxLength={maxLength}
                className="w-full h-20 px-3 py-2 text-sm border border-gray-300 rounded-md resize-none focus:outline-none  placeholder-gray-400"
              />
              <div className="absolute  right-3 text-xs text-gray-400">
                Max {maxLength} Character
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-15 gap-2">
        <button onClick={()=>router.push("/")} className="text-white cursor-pointer bg-[#FF6600] rounded-2xl py-1 px-25">
          Submit
        </button>
      </div>
    </div>
  );
};

export default MaterialRequest;
