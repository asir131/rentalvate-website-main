"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="mt-10 md:h-screen isolate">
      <div className="md:min-h-screen  flex flex-col items-center px-4 sm:px-2 lg:px-1">
        <div className="md:max-w-md w-full ">
          {/* Logo Section */}
          <div className="text-center">
            <div className="flex w-110  justify-center items-center ">
              <Image
                src="/icons/mainLogo.svg"
                alt="Rentalvate Logo"
                width={250}
                height={50}
                className="object-contain mr-16 md:mr-0"
              />
            </div>

            {/* Sign In Header */}
            <h2 className="text-xl sm:text-2xl font-semibold text-[#FF6600] mb-4">
              Sign In to Continue
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-gray-600 mb-2">
              You're just one step away!
            </p>
            <p className="text-sm sm:text-base text-gray-600 mb-8 px-4">
              Please sign in or create a free account to access this feature and
              enjoy the full experience.
            </p>
          </div>

          {/* Buttons Section */}
          <div className="space-y-4">
            <Link
              href="/registration/sign-in"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-base font-medium rounded-lg text-white bg-[#FF6600] hover:bg-[#E55A00] focus:outline-none  transition-colors duration-200"
            >
              Sign In
            </Link>

            <Link
              href="/registration/role"
              className="group relative w-full flex justify-center py-3 px-4 border-2 border-[#FF6600] text-base font-medium rounded-lg text-[#FF6600] bg-white hover:bg-orange-50 focus:outline-none  transition-colors duration-200"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Why Choose Rentalvate Section */}
        <div className="md:max-w-4xl md:w-full mt-5 mb-5">
          <div className="text-center mb-12">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Why choose <span className="text-[#FF6600]">Rentalvate</span>
            </h3>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-around gap-5 sm:gap-5 md:gap-2">
            {/* Vetted Professionals */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <div className="rounded-2xl  shadow-lg ">
                  <Image
                    src="/signUpImgOne.png"
                    alt="Vetted Professionals"
                    width={150}
                    height={150}
                    className="mx-auto object-cover rounded-lg"
                  />
                </div>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-gray-800 mb-2">
                VETTED
              </h4>
              <h4 className="text-sm sm:text-base font-bold text-gray-800">
                PROFESSIONALS
              </h4>
            </div>

            {/* Streamlined Process */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <div className=" rounded-2xl  shadow-lg">
                  <Image
                    src="/signUpImgTwo.png"
                    alt="Streamlined Process"
                    width={150}
                    height={150}
                    className="mx-auto object-cover rounded-lg"
                  />
                </div>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-gray-800 mb-2">
                STREAMLINED
              </h4>
              <h4 className="text-sm sm:text-base font-bold text-gray-800">
                PROCESS
              </h4>
            </div>

            {/* Satisfaction Guaranteed */}
            <div className="flex flex-col items-center text-center sm:col-span-2 lg:col-span-1">
              <div className="mb-6">
                <div className=" rounded-2xl shadow-lg ">
                  <Image
                    src="/signUpImgThree.png"
                    alt="Satisfaction Guaranteed"
                    width={150}
                    height={150}
                    className="mx-auto object-cover rounded-lg"
                  />
                </div>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-gray-800 mb-2">
                SATISFACTION
              </h4>
              <h4 className="text-sm sm:text-base font-bold text-gray-800">
                GUARANTEED
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
