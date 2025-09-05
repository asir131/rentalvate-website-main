"use client";
import Image from "next/image";
import React, { useState } from "react";

import { MdArrowDropDown } from "react-icons/md";
import { IoMdArrowDropup } from "react-icons/io";
import LogOut from "@/components/Modal/LogOut";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSelector } from "react-redux";
// Layout component
const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("editProfile");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const selectedRole = useSelector((state) => state.user.selectedRole);
  const user = selectedRole;

  // Handle section click
  const handleSectionClick = () => {
    setIsModalOpen(true); // Open modal
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Handle menu toggle
  const toggleMenu = (menu) => {
    setActiveMenu(menu);
    setMenuOpen(false); // Close the dropdown after selecting a menu option
  };

  return (
    <div className="h-screen">
      <div className="flex items-center gap-2 mt-5 md:mt-5 border-b-2 border-[#FF6600] mx-10 md:mx-70">
        <Image
          src="/profile.png"
          alt="Profile Icon"
          width={30}
          height={30}
          className="mb-1"
        />
        <h1 className="text-[#FF6600] font-semibold text-3xl mb-2">Profile</h1>
      </div>

      <div className="relative">
        {/* Mobile Dropdown */}
        <div className="md:hidden mt-2 mx-10">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-full bg-[#EBEBEB] hover:bg-[#FFD0B0] shadow-2xl cursor-pointer py-3 px-5 rounded text-left flex items-center justify-between"
          >
            <span className="font-semibold flex gap-50 justify-between">
              Menu
              {menuOpen ? (
                <IoMdArrowDropup size={30} />
              ) : (
                <MdArrowDropDown size={30} />
              )}
            </span>
          </button>

          {menuOpen && (
            <div className="flex flex-col gap-3 mt-3">
              <Link
                href="/profile"
                onClick={() => toggleMenu("editProfile")}
                className={`flex items-center gap-5 ${
                  activeMenu === "editProfile" ? "bg-[#FFD0B0]" : "bg-[#EBEBEB]"
                } hover:bg-[#FFD0B0] shadow-2xl cursor-pointer w-full rounded py-2 px-5`}
              >
                <Image
                  src="/editProfile.png"
                  width={20}
                  height={20}
                  alt="Edit Profile"
                />
                <h1 className="w-40 font-semibold">Edit Profile</h1>
              </Link>
              {user == "manager" && (
                <div>
                  <Link
                    href="/profile/wallet"
                    onClick={() => {
                      toggleMenu("wallet");
                    }}
                    className={`flex items-center mb-3 gap-5 ${
                      activeMenu === "wallet" ? "bg-[#FFD0B0]" : "bg-[#EBEBEB]"
                    } hover:bg-[#FFD0B0] shadow-2xl cursor-pointer w-full rounded py-2 px-5`}
                  >
                    <Image
                      src="/wallet.png"
                      width={20}
                      height={20}
                      alt="Wallet"
                    />
                    <h1 className="w-40 font-semibold">Wallet</h1>
                  </Link>

                  <Link
                    href="/profile/tenants"
                    onClick={() => {
                      toggleMenu("tenants");
                    }}
                    className={`flex items-center gap-5 ${
                      activeMenu === "tenants" ? "bg-[#FFD0B0]" : "bg-[#EBEBEB]"
                    } hover:bg-[#FFD0B0] shadow-2xl cursor-pointer w-full rounded py-2 px-5`}
                  >
                    <Image
                      src="/tenants.png"
                      width={20}
                      height={20}
                      alt="Wallet"
                    />
                    <h1 className="w-40 font-semibold">Tenants</h1>
                  </Link>
                </div>
              )}

              {user == "contractor" && (
                <div>
                  <Link
                    href="/profile/wallet"
                    onClick={() => {
                      toggleMenu("wallet");
                    }}
                    className={`flex items-center mb-3 gap-5 ${
                      activeMenu === "wallet" ? "bg-[#FFD0B0]" : "bg-[#EBEBEB]"
                    } hover:bg-[#FFD0B0] shadow-2xl cursor-pointer w-full rounded py-2 px-5`}
                  >
                    <Image
                      src="/wallet.png"
                      width={20}
                      height={20}
                      alt="Wallet"
                    />
                    <h1 className="w-40 font-semibold">Wallet</h1>
                  </Link>

                  <Link
                    href="/profile/my-review"
                    onClick={() => {
                      toggleMenu("myReview");
                    }}
                    className={`flex items-center gap-5 ${
                      activeMenu === "myReview"
                        ? "bg-[#FFD0B0]"
                        : "bg-[#EBEBEB]"
                    } hover:bg-[#FFD0B0] shadow-2xl cursor-pointer w-full rounded py-2 px-5`}
                  >
                    <Image
                      src="/reviewStar.png"
                      width={20}
                      height={20}
                      alt="My Review"
                    />
                    <h1 className="w-40 font-semibold">My Review</h1>
                  </Link>
                </div>
              )}

              <Link
                href="/profile/settings"
                onClick={() => {
                  toggleMenu("settings");
                }}
                className={`flex items-center gap-5 ${
                  activeMenu === "settings" ? "bg-[#FFD0B0]" : "bg-[#EBEBEB]"
                } hover:bg-[#FFD0B0] shadow-2xl cursor-pointer w-full rounded py-2 px-5`}
              >
                <Image
                  src="/settings.png"
                  width={20}
                  height={20}
                  alt="Settings"
                />
                <h1 className="w-40 font-semibold">Settings</h1>
              </Link>
              <div onClick={handleSectionClick} className="flex items-center gap-5 bg-[#EBEBEB] hover:bg-[#FFD0B0] shadow-2xl cursor-pointer w-full rounded py-2 px-5">
                <Image src="/logout.png" width={20} height={20} alt="Logout" />
                <h1 className="w-40 font-semibold">Log Out</h1>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="grid md:flex">
        <div className="hidden md:flex flex-col gap-3 menu-section mx-10 md:ml-70 md:mr-20 mt-8">
          <Link
            href="/profile"
            onClick={() => toggleMenu("editProfile")}
            className={`flex items-center gap-5 ${
              activeMenu === "editProfile" ? "bg-[#FFD0B0]" : "bg-[#EBEBEB]"
            } hover:bg-[#FFD0B0] shadow-2xl cursor-pointer w-70 rounded py-2 px-5`}
          >
            <Image
              src="/editProfile.png"
              width={20}
              height={20}
              alt="Edit Profile"
            />
            <h1 className="w-40 font-semibold">Edit Profile</h1>
            <Image
              src="/rightArrow.png"
              width={5}
              height={5}
              className="flex right-0"
              alt="Right Arrow"
            />
          </Link>
          {user == "manager" && (
            <div>
              <Link
                href="/profile/wallet"
                onClick={() => {
                  toggleMenu("wallet");
                }}
                className={`flex items-center mb-3 gap-5 ${
                  activeMenu === "wallet" ? "bg-[#FFD0B0]" : "bg-[#EBEBEB]"
                } hover:bg-[#FFD0B0] shadow-2xl cursor-pointer w-70 rounded py-2 px-5`}
              >
                <Image src="/wallet.png" width={20} height={20} alt="Wallet" />
                <h1 className="w-40 font-semibold">Wallet</h1>
                <Image
                  src="/rightArrow.png"
                  width={5}
                  height={5}
                  className="flex right-0"
                  alt="Right Arrow"
                />
              </Link>
              <Link
                href="/profile/tenants"
                onClick={() => {
                  toggleMenu("tenants");
                }}
                className={`flex items-center gap-5 ${
                  activeMenu === "tenants" ? "bg-[#FFD0B0]" : "bg-[#EBEBEB]"
                } hover:bg-[#FFD0B0] shadow-2xl cursor-pointer w-70 rounded py-2 px-5`}
              >
                <Image src="/tenants.png" width={20} height={20} alt="Wallet" />
                <h1 className="w-40 font-semibold">tenants</h1>
                <Image
                  src="/rightArrow.png"
                  width={5}
                  height={5}
                  className="flex right-0"
                  alt="Right Arrow"
                />
              </Link>
            </div>
          )}
          {user == "contractor" && (
            <div>
              <Link
                href="/profile/wallet"
                onClick={() => {
                  toggleMenu("wallet");
                }}
                className={`flex items-center mb-3 gap-5 ${
                  activeMenu === "wallet" ? "bg-[#FFD0B0]" : "bg-[#EBEBEB]"
                } hover:bg-[#FFD0B0] shadow-2xl cursor-pointer w-70 rounded py-2 px-5`}
              >
                <Image src="/wallet.png" width={20} height={20} alt="Wallet" />
                <h1 className="w-40 font-semibold">Wallet</h1>
                <Image
                  src="/rightArrow.png"
                  width={5}
                  height={5}
                  className="flex right-0"
                  alt="Right Arrow"
                />
              </Link>
              <Link
                href="/profile/my-review"
                onClick={() => {
                  toggleMenu("myReview");
                }}
                className={`flex items-center gap-5 ${
                  activeMenu === "myReview" ? "bg-[#FFD0B0]" : "bg-[#EBEBEB]"
                } hover:bg-[#FFD0B0] shadow-2xl cursor-pointer w-70 rounded py-2 px-5`}
              >
                <Image
                  src="/reviewStar.png"
                  width={20}
                  height={20}
                  alt="My Review"
                />
                <h1 className="w-40 font-semibold">My Review</h1>
                <Image
                  src="/rightArrow.png"
                  width={5}
                  height={5}
                  className="flex right-0"
                  alt="Right Arrow"
                />
              </Link>
            </div>
          )}

          <Link
            href="/profile/settings"
            onClick={() => {
              toggleMenu("settings");
            }}
            className={`flex items-center gap-5 ${
              activeMenu === "settings" ? "bg-[#FFD0B0]" : "bg-[#EBEBEB]"
            } hover:bg-[#FFD0B0] shadow-2xl cursor-pointer w-70 rounded py-2 px-5`}
          >
            <Image src="/settings.png" width={20} height={20} alt="Settings" />
            <h1 className="w-40 font-semibold">Settings</h1>
            <Image
              src="/rightArrow.png"
              width={5}
              height={5}
              className="flex right-0"
              alt="Right Arrow"
            />
          </Link>
          <div
            onClick={handleSectionClick}
            className="flex items-center gap-5 bg-[#EBEBEB] hover:bg-[#FFD0B0] shadow-2xl cursor-pointer w-70 rounded py-2 px-5"
          >
            <Image src="/logout.png" width={20} height={20} alt="Logout" />
            <h1 className="w-40 font-semibold">Log Out</h1>
          </div>
        </div>

        {/* Children will be rendered here */}
        <div>{children}</div>
      </div>
      <LogOut isOpen={isModalOpen} close={handleCloseModal} />
    </div>
  );
};

export default Layout;
