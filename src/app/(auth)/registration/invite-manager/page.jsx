"use client";
import React, { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useRouter } from "next/navigation";
const InviteManager = () => {
  const [formData, setFormData] = useState({
    managerName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const router = useRouter();

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
   
   router.push("/dashboard");

    // Submit logic
  };

  return (
    <div className="h-screen">
      <div
        onClick={() => window.history.back()}
        className="cursor-pointer flex items-center md:ml-60 md:mt-20 gap-2 text-xl font-semibold mb-4"
      >
        <MdKeyboardArrowLeft size={30} className="align-middle mt-1" />
        <h1 className="align-middle font-semibold">Invite Manager</h1>
      </div>

      <div className="max-w-lg mx-auto p-6 bg-white md:mt-10">
        <div className="space-y-6">
          {/* Manager Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Manager Name (Optional)
            </label>
            <input
              type="text"
              name="managerName"
              value={formData.managerName}
              onChange={handleInputChange}
              placeholder="Enter name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors text-gray-900 placeholder-gray-400"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <PhoneInput
              value={formData.phoneNumber} // Bind the state to the value
              onChange={handlePhoneChange} // Handle phone number changes
              id="phoneNumber"
              defaultCountry="US" // Optional: Set a default country
              withCountryCallingCode
              countrySelectProps={{ "aria-label": "Country" }}
              placeholder="Enter phone"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors text-gray-900 placeholder-gray-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email (Optional)
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors text-gray-900 placeholder-gray-400"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Write something"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors text-gray-900 placeholder-gray-400 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center items-center h-full">
            <button
              onClick={handleSubmit}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-lg"
            >
              Invite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteManager;
