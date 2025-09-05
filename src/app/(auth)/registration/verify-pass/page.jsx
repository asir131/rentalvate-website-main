"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/navigation";

const VerifyPass = () => {
  const router = useRouter();
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const inputRefs = useRef([]);

  const handleCodeChange = (index, value) => {
    // Only allow single digits
    if (value.length > 1) return;

    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const code = verificationCode.join("");
    console.log("Verification code:", code);
    router.push("/registration/reset-password");
    // Submit logic
  };

  return (
    <div className="md:h-screen mb-40">
      <div
        onClick={() => window.history.back()}
        className="cursor-pointer flex items-center md:ml-100 md:mt-10 gap-2 text-xl font-semibold mb-4"
      >
        <MdKeyboardArrowLeft size={30} className="align-middle mt-1" />
        <h1 className="align-middle font-semibold">Verify</h1>
      </div>

      <div className="max-w-lg mx-auto p-1 bg-white md:-mt-10">
        <div className="flex flex-col items-center">
          <Image
            className="my-2"
            src="/icons/mainLogo.svg"
            alt=" "
            width={200}
            height={100}
          />
          <p className="text-sm text-gray-600 my-5 mb-10 text-center">
            Please enter the verification code sent to
            <br />
            your phone
          </p>
        </div>
        <div className="space-y-6">
          {/* Verification Code Input */}
          <div className="flex justify-center gap-3 mb-6">
            {verificationCode.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength="1"
                value={digit}
                placeholder="-"
                onChange={(e) =>
                  handleCodeChange(index, e.target.value.replace(/[^0-9]/g, ""))
                }
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-xl font-semibold border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
              />
            ))}
          </div>

          <div className="flex justify-between text-sm mx-5">
            <span className="text-gray-600">Didn't get the code? </span>
            <span className="text-orange-500 border-b border-orange-500 cursor-pointer font-semibold ">
              Resend
            </span>
          </div>

          {/* Submit Button */}
          <div className="flex mx-5 justify-center items-center h-full mt-8">
            <button
              onClick={handleSubmit}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 text-lg"
            >
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyPass;
