import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <section className="mt-auto    bg-orange-100">
      {/* footer navigation and logo section in footer*/}
      <div className="flex flex-col md:flex-row justify-between max-w-7xl mx-auto p-2 md:p-4 lg:p-6">
        {/* Logo and Description section */}
        <div>
          {/* RentalVate logo  */}
          <div className="w-48 h-20 mb-4 relative right-0">
            <Image
              src={"/icons/mainLogo.svg"}
              alt="Footer Logo"
              className="object-contain"
              priority
              fill
            />
          </div>
          {/* RentalVate Description */}
          <p className="text-gray-500 text-justify p-3 lg:p-0 w-full md:w-80 lg:w-96">
            Rentalvate is a smart solution built to simplify rental property
            maintenance. We connect landlords, tenants, and contractors in one
            seamless platform making job requests, approvals, and communication
            faster and easier than ever.
          </p>
        </div>

        {/* Footer Navigation Links */}
        <div className="grid grid-cols-2 lg:grid-cols-3 p-3">
          <div className="flex flex-col gap-3">
            <h2 className="text-xl text-primary font-semibold">Explore</h2>
            <Link href={"/"} className="text-gray-700">
              Home
            </Link>
            <Link href={"/"} className="text-gray-700">
              Services
            </Link>
            <Link href={"/"} className="text-gray-700">
              Inbox
            </Link>
            <Link href={"/"} className="text-gray-700">
              Contact
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl text-primary font-semibold">Unity Pages</h2>
            <Link href={"/"} className="text-gray-700">
              About Us
            </Link>
            <Link href={"/"} className="text-gray-700">
              Privacy Policy
            </Link>
            <Link href={"/"} className="text-gray-700">
              Terms & Condition
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl text-primary font-semibold">Get in Touch</h2>
            <Link href={"mailTo:example@gmail.com"} className="text-gray-700">
              Fortunekouka@gmail.com
            </Link>
            <p className="text-gray-700">(009)56567890</p>
          </div>
        </div>
      </div>

      {/* credit section in footer */}
      <div className=" text-white px-5 py-7 bg-[#1A1F36] w-full text-center">
        © 2023 Rentalvate. All rights reserved.
      </div>
    </section>
  );
};
