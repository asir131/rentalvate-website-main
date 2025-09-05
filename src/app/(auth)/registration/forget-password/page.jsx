"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useRouter } from "next/navigation";

const ForgetPassword = () => {
  const router = useRouter();
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

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    router.push("/registration/verify-pass");
    // Submit logic
  };

  return (
    <div className=" md:h-screen">
      <div
        onClick={() => window.history.back()}
        className="cursor-pointer flex items-center md:ml-100 md:mt-10 gap-2 text-xl font-semibold mb-4"
      >
        <MdKeyboardArrowLeft size={30} className="align-middle mt-1" />
        <h1 className="align-middle font-semibold">Forget Password</h1>
      </div>

      <div className="max-w-lg mx-auto p-1 bg-white md:-mt-10">
        <div className="flex flex-col items-center">
          <Image
            className="my-2"
            src="/icons/mainLogo.svg"
            alt=" "
            width={200}
            height={100}
          />
          <p className="text-xs opacity-60 my-5 mb-10">
            Make sure that you already have an account.
          </p>
        </div>
        <div className="space-y-6">
          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <PhoneInput
              value={formData.phoneNumber}
              onChange={handlePhoneChange}
              id="phoneNumber"
              defaultCountry="US"
              withCountryCallingCode
              countrySelectProps={{ "aria-label": "Country" }}
              className="w-full flex gap-3  px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors text-gray-900 placeholder-gray-400"
              placeholder="Enter phone"
            />
          </div>

          {/* Submit Button */}
          <div className="flex mx-5 justify-center items-center h-full mt-8">
            <button
              onClick={handleSubmit}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 text-lg"
            >
              Get Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
