"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ManagerSuccessModal from "../Modal/ManagerSuccessModal";

const ContractorRegistrationForm = () => {
  const [image, setImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [pdfFile, setPdfFile] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  // Form data state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    tradeTypes: [], // Changed to array for multiple selections
    yearsOfExperience: "",
    isLicensedContractor: false,
    licenseNumber: "",
  });

  const tradeOptions = [
    "General Handyman",
    "Plumbing",
    "Electrical",
    "HVAC",
    "Appliance Repair",
    "Carpentry",
    "Window & Door",
    "Roofing & Gutters",
    "Cleaning",
    "Junk Removal",
    "Other",
  ];

  const user = "contractor";

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

  const handlePdfChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
    } else {
      alert("Please select a PDF file");
    }
  };

  const handleDivClick = () => {
    document.getElementById("image-upload").click();
  };

  const handleImageClick = (e) => {
    e.stopPropagation();
  };

  // Handle trade type selection
  const handleTradeTypeChange = (tradeType) => {
    setFormData((prev) => ({
      ...prev,
      tradeTypes: prev.tradeTypes.includes(tradeType)
        ? prev.tradeTypes.filter((type) => type !== tradeType)
        : [...prev.tradeTypes, tradeType],
    }));
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle toggle change
  const handleToggleChange = () => {
    setFormData((prev) => ({
      ...prev,
      isLicensedContractor: !prev.isLicensedContractor,
      // Clear license number if toggling off
      licenseNumber: !prev.isLicensedContractor ? prev.licenseNumber : "",
    }));
  };

  // Submit function
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    const requiredFields = ["fullName", "email", "yearsOfExperience"];
    const emptyFields = requiredFields.filter(
      (field) => !formData[field].trim()
    );

    // Check if at least one trade type is selected
    if (formData.tradeTypes.length === 0) {
      alert("Please select at least one trade type");
      return;
    }

    // Add license number validation if contractor is licensed
    if (formData.isLicensedContractor && !formData.licenseNumber.trim()) {
      emptyFields.push("licenseNumber");
    }

    if (emptyFields.length > 0) {
      alert(
        `Please fill in the following required fields: ${emptyFields.join(
          ", "
        )}`
      );
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Create submission object
    const submissionData = {
      ...formData,
      image: image,
      pdfCertification: pdfFile,
      userType: user,
      submittedAt: new Date().toISOString(),
    };

    console.log("Form submitted:", submissionData);

    router.push("/registration/service-area");
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
            <div
              className="border-2 border-[#FF6600] rounded-full relative"
              onClick={handleDivClick}
            >
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

            <h1 className="text-center mt-2 font-semibold text-xl">
              Upload Photo
            </h1>
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
              <label className="block text-gray-700 font-semibold">
                Trade Type
              </label>
              <div className="relative">
                <div
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF6600] focus:outline-none cursor-pointer bg-white flex items-center justify-between"
                >
                  <span className="text-gray-700">
                    {formData.tradeTypes.length === 0
                      ? "Select one"
                      : `${formData.tradeTypes.length} selected`}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {isDropdownOpen && (
                  <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                    {tradeOptions.map((option) => (
                      <div
                        key={option}
                        onClick={() => handleTradeTypeChange(option)}
                        className="flex items-center px-3 py-2 hover:bg-gray-50 cursor-pointer"
                      >
                        <div
                          className={`w-5 h-5 border-2 rounded flex items-center justify-center mr-3 ${
                            formData.tradeTypes.includes(option)
                              ? "bg-green-500 border-green-500"
                              : "border-gray-300"
                          }`}
                        >
                          {formData.tradeTypes.includes(option) && (
                            <svg
                              className="w-3 h-3 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                        <span className="text-gray-700">{option}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="yearsOfExperience"
                className="block text-gray-700 font-semibold"
              >
                Years of Experience
              </label>
              <input
                type="number"
                id="yearsOfExperience"
                name="yearsOfExperience"
                value={formData.yearsOfExperience}
                onChange={handleInputChange}
                className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF6600] focus:outline-none"
                placeholder="Enter Years"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="pdfUpload"
                className="block text-gray-700 font-semibold"
              >
                Upload Certification (Optional)
              </label>
              <div className="mt-2 relative">
                <input
                  type="file"
                  id="pdfUpload"
                  accept="application/pdf"
                  onChange={handlePdfChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="p-2 border border-gray-300 rounded-md bg-gray-50 flex items-center justify-between">
                  <span className="text-gray-500">
                    {pdfFile ? pdfFile.name : "PDF"}
                  </span>
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <label className="block text-gray-700 font-semibold">
                Are you a Licensed contractor?
              </label>
              <div
                onClick={handleToggleChange}
                className={`relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer transition-colors ${
                  formData.isLicensedContractor ? "bg-[#FF6600]" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    formData.isLicensedContractor
                      ? "translate-x-6"
                      : "translate-x-1"
                  }`}
                />
              </div>
            </div>

            {formData.isLicensedContractor && (
              <div className="mb-4">
                <label
                  htmlFor="licenseNumber"
                  className="block text-gray-700 font-semibold"
                >
                  License Number
                </label>
                <input
                  type="text"
                  id="licenseNumber"
                  name="licenseNumber"
                  value={formData.licenseNumber}
                  onChange={handleInputChange}
                  className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF6600] focus:outline-none"
                  placeholder="Enter number here"
                />
              </div>
            )}
          </div>
        </div>

        <button
        onCanPlay={()=>router.push("/dashboard")}
          type="submit"
          className="flex items-center justify-center text-center bg-[#FF6600] hover:bg-orange-600 text-white text-lg font-semibold px-30 md:px-35 py-2 mb-5 rounded-xl mx-8 md:mx-100"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContractorRegistrationForm;
