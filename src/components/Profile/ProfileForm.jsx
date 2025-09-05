'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const ProfileForm = () => {
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    unitNumber: '',
    propertyName: '',
    zipCode: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handlePhoneChange = (value) => {
    setFormData(prev => ({
      ...prev,
      phoneNumber: value
    }));
    console.log("Phone Number:", value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
   const handleDivClick = () => {
    document.getElementById('image-upload').click(); // Trigger file input click on div click
  };
  const handleImageClick = (e) => {
    e.stopPropagation(); // Prevent the click from bubbling up to the parent div
  };

  return (
    <div className="w-100 md:w-200 bg-white p-6 rounded-lg">
      {/* Profile Avatar */}
      <div className="flex justify-center mb-6">
         <div className="border-2 border-[#FF6600] rounded-full relative" onClick={handleDivClick}>
                      <div className="rounded-full overflow-hidden">
                        <Image
                          className="rounded-full overflow-hidden"
                          src={image || "/dummy-image.png"} // If image is uploaded, show that; otherwise, show dummy image
                          width={150}
                          height={150}
                          alt="Profile Picture"
                        />
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                        id="image-upload"
                      />
                      <label
                        htmlFor="image-upload"
                        className="absolute right-3 bottom-1 cursor-pointer"
                      >
                        <Image
                          src="/Upload.png"
                          width={35}
                          height={35}
                          alt="Upload Icon"
                          onClick={handleImageClick}
                        />
                      </label>
                    </div>
      </div>

      <div className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Enter name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-gray-400"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <PhoneInput
            value={formData.phoneNumber} // Bind the state to the value
            onChange={handlePhoneChange}
            id="phoneNumber"
            defaultCountry="US"
            withCountryCallingCode
            countrySelectProps={{ "aria-label": "Country" }}
            className="outline-none w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-gray-400"
          />
        </div>

        {/* Unit Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Unit Number
          </label>
          <input
            type="text"
            name="unitNumber"
            value={formData.unitNumber}
            onChange={handleInputChange}
            placeholder="Enter unit number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-gray-400"
          />
        </div>

        {/* Property Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Property Name
          </label>
          <input
            type="text"
            name="propertyName"
            value={formData.propertyName}
            onChange={handleInputChange}
            placeholder="Enter Property name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-gray-400"
          />
        </div>

        {/* ZIP Code */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ZIP Code
          </label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
            placeholder="Enter street address"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-gray-400"
          />
        </div>

        {/* Update Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 mt-6"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default ProfileForm;
