import Image from "next/image";
import React from "react";
import { IoMdSearch } from "react-icons/io";

const page = () => {
  const residents = [
    {
      name: "Shakil Ahmed",
      address: "Greenfield Apartments, Unit 302",
      image: "/inspectionImg.png",
    },
    {
      name: "Asif Hasan",
      address: "Greenfield Apartments, Unit 302",
      image: "/inspectionImg.png",
    },
    {
      name: "Sarah Khan",
      address: "Greenfield Apartments, Unit 302",
      image: "/inspectionImg.png",
    },
    {
      name: "Sarah Khan",
      address: "Greenfield Apartments, Unit 302",
      image: "/inspectionImg.png",
    },
    {
      name: "Sarah Khan",
      address: "Greenfield Apartments, Unit 302",
      image: "/inspectionImg.png",
    },
    {
      name: "Sarah Khan",
      address: "Greenfield Apartments, Unit 302",
      image: "/inspectionImg.png",
    },
  ];
  return (
    <div className="mx-5 h-screen md:mx-0 ml-10 md:ml-0 flex flex-col mt-8">
      <div className="w-80 md:w-230 flex justify-between">
        <div className="md:text-xl font-semibold">My Tenants</div>
        <button className="bg-[#FF6600] py-2 px-5 md:px-15 text-center hover:bg-orange-600 text-white font-semibold md:text-lg rounded-2xl">
          Invite Tenant
        </button>
      </div>
      <div className="border md:ml-20 md:w-3/4 rounded-2xl flex items-center p-2 mt-5">
        <IoMdSearch size={30} className="text-orange-500 ml-2" />
        <input type="text" className="ml-5 outline-none" placeholder="Search" />
      </div>
      <div>
        {residents.map((item, index) => {
          return (
            <div className="flex gap-4 mt-5 mb-6 md:ml-22" key={index}>
              <div className="h-12 w-12">
                <Image src={item.image} alt="" width={100} height={100} />
              </div>
              <div>
                <h1 className="font-semibold text-lg">{item.name}</h1>
                <p className="text-sm opacity-60">{item.address}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
