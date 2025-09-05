"use client";
import React from "react";
import Image from "next/image";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedRole } from "@/app/store/slices/userSlice";

const SelectRolePage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const selectedRole = useSelector((state) => state.user.selectedRole);

  const handleRoleSelect = (role) => {
    dispatch(setSelectedRole(role));
  };

  const handleNext = () => {
    if (selectedRole) {
      console.log("Selected role:", selectedRole);
      
      router.push("/registration/sign-up");
    }
  };

  const roles = [
    {
      id: "tenant",
      title: "I'm a Tenant",
      image: "/imTenant.png",
    },
    {
      id: "manager",
      title: "I'm a Manager",
      image: "/imManager.png",
    },
    {
      id: "contractor",
      title: "I'm a Contractor",
      image: "/imContractor.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 sm:px-6 lg:px-8 py-8">
      <div
        onClick={() => window.history.back()}
        className="flex items-start mb-8 mr-30 md:mr-200"
      >
        <div className="flex items-center justify-center mr-10 cursor-pointer">
          <MdKeyboardArrowLeft size={30} />
          <h1 className="text-lg ml-2 sm:text-xl font-medium text-gray-700 ">
            Select Your Role
          </h1>
        </div>
      </div>
      <div className="max-w-md w-80  md:w-100">
        {/* Header with Back Button */}
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <Image
            src="/icons/mainLogo.svg"
            alt="Rentalvate Logo"
            width={200}
            height={100}
          />
        </div>
        {/* Subtitle */}
        <div className="text-center mb-12">
          <p className="text-xs  text-gray-600">
            Pick your role to unlock the right features.
          </p>
        </div>
        {/* Role Selection Cards */}
        <div className="space-y-3 mb-8 ">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => handleRoleSelect(role.id)}
              className={`w-full p-2 rounded border transition-all duration-200 hover:shadow-md ${
                selectedRole === role.id
                  ? "bg-[#FFD0B0] border-[#FF8533] "
                  : "bg-[#E8E9EB] border-[#E8E9EB] text-gray-800 hover:bg-gray-200"
              }`}
            >
              <div className="flex items-center justify-center space-x-3">
                <div className="relative">
                  <Image
                    src={role.image}
                    alt={role.title}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <span className="text-base font-medium">{role.title}</span>
              </div>
            </button>
          ))}
        </div>
        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={!selectedRole}
          className={`w-full py-2 px-6 rounded-2xl text-base sm:text-lg font-semibold transition-all duration-200 ${
            selectedRole
              ? "bg-[#FF6600] text-white hover:bg-[#E55A00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6600]"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SelectRolePage;
