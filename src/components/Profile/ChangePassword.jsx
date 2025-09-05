'use client';
import Image from "next/image";
import React, { useState } from "react";
import Settings from '@/components/Profile/Settings'; // Import the Settings component

const ChangePassword = () => {
  // State to control password visibility
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [settings, setSettings] = useState(false);

  // Function to toggle password visibility
  const togglePasswordVisibility = (type) => {
    if (type === "current") {
      setShowCurrentPassword(!showCurrentPassword);
    } else if (type === "new") {
      setShowNewPassword(!showNewPassword);
    } else if (type === "confirm") {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  return (
    <div className="w-full mt-10 ">
        <div
          className="flex ml-5 md:ml-0 items-center gap-2 mb-5 cursor-pointer"
          onClick={() => window.history.back()}
        >
          <Image src="/left-arrow.png" width={20} height={20} alt="Back Arrow" />
          <h1 className="font-semibold text-xl">Change Password</h1>
        </div>
        <div className="flex ml-10 md:ml-20 flex-col w-80 md:w-150 items-center">
          {/* Current password input */}
          <div className="flex items-center mt-5 w-full justify-between gap-2 mb-4 border border-[#A1A1A1] p-3 rounded-lg">
            <Image src="/changePass.png" width={20} height={20} alt="Lock Icon" />
            <input
              className="ml-5 outline-none w-full"
              type={showCurrentPassword ? "text" : "password"}
              placeholder="Current password"
            />
            <Image
              src="/eye.png"
              width={15}
              height={15}
              alt="Eye Icon"
              onClick={() => togglePasswordVisibility("current")}
              className="cursor-pointer"
            />
          </div>
          {/* New password input */}
          <div className="flex items-center w-full justify-between gap-2 mb-4 border border-[#A1A1A1] p-3 rounded-lg">
            <Image src="/changePass.png" width={20} height={20} alt="Lock Icon" />
            <input
              className="ml-5 outline-none w-full"
              type={showNewPassword ? "text" : "password"}
              placeholder="New password"
            />
            <Image
              src="/eye.png"
              width={15}
              height={15}
              alt="Eye Icon"
              onClick={() => togglePasswordVisibility("new")}
              className="cursor-pointer"
            />
          </div>
          {/* Confirm password input */}
          <div className="flex items-center w-full justify-between gap-2 mb-4 border border-[#A1A1A1] p-3 rounded-lg">
            <Image src="/changePass.png" width={20} height={20} alt="Lock Icon" />
            <input
              className="ml-5 outline-none w-full"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
            />
            <Image
              src="/eye.png"
              width={15}
              height={15}
              alt="Eye Icon"
              onClick={() => togglePasswordVisibility("confirm")}
              className="cursor-pointer"
            />
          </div>
          <button className="bg-[#FF6600] hover:bg-orange-600 text-white font-semibold text-xl py-2 px-25 md:px-40 rounded-xl">
            Update
          </button>
        </div>
      </div>
  );
};

export default ChangePassword;
