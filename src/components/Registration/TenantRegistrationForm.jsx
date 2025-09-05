"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import SuccessModal from "@/components/Modal/SuccessModal"
import InviteManager from "@/components/Modal/InviteManager"
import { useRouter } from "next/navigation";
const TenantRegistrationForm = () => {
  const router = useRouter();
  const [image, setImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  
  // Form data state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    unitNumber: '',
    propertyName: '',
    zipCode: '',
    managerPhone: ''
  });

  const user = "tenant"

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

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
    document.getElementById('image-upload').click();
  };

  const handleImageClick = (e) => {
    e.stopPropagation();
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    const requiredFields = ['fullName', 'email', 'unitNumber', 'propertyName', 'zipCode'];
    const emptyFields = requiredFields.filter(field => !formData[field].trim());
    
    if (emptyFields.length > 0) {
      alert(`Please fill in the following required fields: ${emptyFields.join(', ')}`);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Create submission object
    const submissionData = {
      ...formData,
      image: image,
      userType: user,
      submittedAt: new Date().toISOString()
    };

    

     
    
    
    openModal();
//     if (formData.managerPhone !== "") {
//    router.push("/dashboard");
// }

   
  };

  return (
    <div className="flex flex-col mx-1 md:mx-80 ">
      
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mt-5 md:mt-10 md:flex gap-8 md:gap-20 md:mx-20 flex-col md:flex-row">
          <div className="profile-image flex flex-col items-center justify-center md:w-2/4 w-full mb-8 md:mb-0">
            <p className="text-center text-gray-600 mb-4">
              Please complete all required fields to finish <br /> your
              registration.
            </p>
            <div className="border-2 border-[#FF6600] rounded-full relative" onClick={handleDivClick}>
              <div className="rounded-full overflow-hidden">
                <Image
                  className="rounded-full overflow-hidden"
                  src={image || "/dummy-image.png"}
                  width={188}
                  height={196}
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
                className="absolute right-3 bottom-2 cursor-pointer"
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

            <h1 className="text-center mt-2 font-semibold text-xl">Upload Photo</h1>
          </div>

          <div className="md:w-2/4 w-full mx-auto p-6 bg-white rounded-lg">
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-gray-700 font-semibold"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF6600] focus:outline-none"
                placeholder="Enter name"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF6600] focus:outline-none"
                placeholder="Enter email"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="unitNumber"
                className="block text-gray-700 font-semibold"
              >
                Unit Number
              </label>
              <input
                type="text"
                id="unitNumber"
                name="unitNumber"
                value={formData.unitNumber}
                onChange={handleInputChange}
                className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF6600] focus:outline-none"
                placeholder="Enter unit number"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="propertyName"
                className="block text-gray-700 font-semibold"
              >
                Property Name
              </label>
              <input
                type="text"
                id="propertyName"
                name="propertyName"
                value={formData.propertyName}
                onChange={handleInputChange}
                className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF6600] focus:outline-none"
                placeholder="Enter property name"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="zipCode"
                className="block text-gray-700 font-semibold"
              >
                ZIP Code
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF6600] focus:outline-none"
                placeholder="Enter ZIP code"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="managerPhone"
                className="block text-gray-700 font-semibold"
              >
                Manager's Phone
              </label>
              <input
                type="tel"
                id="managerPhone"
                name="managerPhone"
                value={formData.managerPhone}
                onChange={handleInputChange}
                className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF6600] focus:outline-none"
                placeholder="Enter phone number"
              />
            </div>
          </div>
        </div>

        <button 
          type="submit"
          className="flex items-center justify-center text-center bg-[#FF6600] hover:bg-orange-600 text-white text-lg font-semibold px-30 md:px-35 py-2 mb-5 rounded-xl mx-8 md:mx-100"
        >
          Submit
        </button>
        
        {
            formData.managerPhone && (
                <SuccessModal isOpen={isOpen} close={closeModal} />
            )
        }
         {
            !formData.managerPhone && (
                <InviteManager isOpen={isOpen} close={closeModal} />
            )
        }
      </form>
    </div>
  );
};

export default TenantRegistrationForm;