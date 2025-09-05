"use client"
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle, // Import DialogTitle
} from "@/components/ui/dialog";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function RecommendContractor({ isOpen, close }) {
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
    // Submit logic
  };
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="w-80">
        {/* Add DialogTitle for accessibility */}
        <DialogTitle>
          <div className="sr-only">Recommend Contractor</div> {/* sr-only to visually hide */}
        </DialogTitle>
        
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors text-gray-900 placeholder-gray-400"
            />
          </div>
        
        <div className="flex justify-between gap-2">
          <button onClick={close} className="bg-[#EDEDED] font-semibold p-1 px-5 rounded-lg">
            Cancel
          </button>
          <button className="bg-[#FF6600] font-semibold p-1 px-3 rounded-lg text-white">
            Submit
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
