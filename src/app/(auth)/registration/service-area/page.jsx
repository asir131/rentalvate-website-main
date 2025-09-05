"use client";
import Image from "next/image";
import React, { useState } from "react";
import ContractorSuccessModal from "@/components/Modal/ContractorSuccessModal"
const ServiceAreaForm = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    zipCode: '',
    distance: ''
  });
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const distanceOptions = [
    { value: '', label: 'Select one' },
    { value: '5', label: '5 miles' },
    { value: '10', label: '10 miles' },
    { value: '15', label: '15 miles' },
    { value: '20', label: '20 miles' },
    { value: '25', label: '25 miles' },
    { value: '50', label: '50 miles' },
    { value: '100', label: '100 miles' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.zipCode.trim()) {
      alert('Please enter your ZIP code');
      return;
    }
    
    if (!formData.distance) {
      alert('Please select a distance');
      return;
    }

   
    // Create submission object
    const submissionData = {
      ...formData,
      submittedAt: new Date().toISOString()
    };

    console.log('Service area submitted:', submissionData);
    
   
    openModal();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Logo */}
      <div className="mt-12 mb-16">
        <Image
          src="/logo.png"
          width={200}
          height={100}
          alt="Rentalvate Logo"
          className="h-auto"
        />
      </div>

      {/* Main Content */}
      <div className="w-full max-w-md px-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-2">
            Set your Service Area
          </h1>
          <p className="text-gray-600 text-xs">
            Enter your ZIP code and how far you're willing to travel.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* ZIP Code Field */}
          <div>
            <label
              htmlFor="zipCode"
              className="block text-gray-700 font-medium mb-2"
            >
              ZIP Code
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6600] focus:border-transparent outline-none transition-colors"
              placeholder="Zip Code"
              maxLength="10"
            />
          </div>

          {/* Distance Field */}
          <div>
            <label
              htmlFor="distance"
              className="block text-gray-700 font-medium mb-2"
            >
              Distance
            </label>
            <select
              id="distance"
              name="distance"
              value={formData.distance}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6600] focus:border-transparent outline-none transition-colors appearance-none bg-white cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                backgroundPosition: 'right 0.75rem center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '1.5em 1.5em'
              }}
            >
              {distanceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <div className="pt-8">
            <button
              type="submit"
              className="w-full bg-[#FF6600] hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-[#FF6600] focus:ring-offset-2 outline-none"
            >
              Submit
            </button>
          </div>
          <ContractorSuccessModal isOpen={isOpen} close={closeModal} />
        </form>
      </div>
    </div>
  );
};

export default ServiceAreaForm;