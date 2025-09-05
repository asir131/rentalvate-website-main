"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useRouter } from "next/navigation";
const SignIn = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const router = useRouter();
  // Function to toggle password visibility
  const togglePasswordVisibility = (type) => {
    if (type === "current") {
      setShowCurrentPassword(!showCurrentPassword);
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
    router.push("/");
    // Submit logic
  };

  return (
    <div className="h-screen">
      <div
        onClick={() => window.history.back()}
        className="cursor-pointer flex items-center md:ml-100 md:mt-10 gap-2 text-xl font-semibold mb-4"
      >
        <MdKeyboardArrowLeft size={30} className="align-middle mt-1" />
        <h1 className="align-middle font-semibold">Sign In</h1>
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
            Please enter your email to reset your password.
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
          <Link
            className="flex float-right text-xs border-b border-black  opacity-60"
            href="/registration/forget-password"
          >
            Forgot Password
          </Link>
          {/* Submit Button */}
          <div className="flex mx-5 justify-center items-center h-full mt-16">
            <button
              onClick={handleSubmit}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 text-lg"
            >
              Sign In
            </button>
          </div>
          <div className="text-center justify-between gap-5">
            <span className="text-sm mr-2">Don’t have any account?</span>
            <Link
              className="text-orange-600 text-md font-semibold"
              href="/registration/sign-up"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
