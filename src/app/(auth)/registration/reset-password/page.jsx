"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import ResetPasswords from "@/components/Modal/ResetPassword";

const ResetPassword = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showSecondPassword, setShowSecondPassword] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  // Function to toggle password visibility
  const togglePasswordVisibility = (type) => {
    if (type === "current") {
      setShowCurrentPassword(!showCurrentPassword);
    } else if (type === "second") {
      setShowSecondPassword(!showSecondPassword);
    }
  };
  const [formData, setFormData] = useState({
    phoneNumber: "",
  });

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      phoneNumber: value, // Update formData with the phone number in E.164 format
    }));
    console.log("Phone Number:", value); // Log the phone number (or use it elsewhere)
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    openModal();
    // Submit logic
  };

  return (
    <div className="h-screen">
      <div
        onClick={() => window.history.back()}
        className="cursor-pointer flex items-center md:ml-100 md:mt-10 gap-2 text-xl font-semibold mb-4"
      >
        <MdKeyboardArrowLeft size={30} className="align-middle mt-1" />
        <h1 className="align-middle font-semibold">Reset Password</h1>
      </div>

      <div className="max-w-lg mx-auto p-1 bg-white md:-mt-10">
        <div className="flex flex-col items-center">
          <Image
            className="my-6"
            src="/icons/mainLogo.svg"
            alt=" "
            width={200}
            height={100}
          />
          <p className="text-xs opacity-60 my-5">
            Password must have 6-8 characters.
          </p>
        </div>
        <div className="space-y-6">
          <div className="flex items-center mt-5 w-full justify-between gap-2 mb-4 border border-gray-300 p-3 rounded-lg">
            <Image
              src="/changePass.png"
              width={20}
              height={20}
              alt="Lock Icon"
            />
            <input
              className="ml-5 outline-none w-full"
              type={showCurrentPassword ? "text" : "password"}
              placeholder="New Password"
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
          <div className="flex items-center mt-5 w-full justify-between gap-2 mb-4 border border-gray-300 p-3 rounded-lg">
            <Image
              src="/changePass.png"
              width={20}
              height={20}
              alt="Lock Icon"
            />
            <input
              className="ml-5 outline-none w-full"
              type={showSecondPassword ? "text" : "password"}
              placeholder="Confirm Password"
            />
            <Image
              src="/eye.png"
              width={15}
              height={15}
              alt="Eye Icon"
              onClick={() => togglePasswordVisibility("second")}
              className="cursor-pointer"
            />
          </div>

          {/* Submit Button */}
          <div className="flex mx-5 justify-center items-center h-full mt-10">
            <button
              onClick={handleSubmit}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 text-lg"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
      <ResetPasswords isOpen={isOpen} close={closeModal} />
    </div>
  );
};

export default ResetPassword;
