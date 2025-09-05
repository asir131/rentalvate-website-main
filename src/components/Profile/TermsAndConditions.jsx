import Image from "next/image";
import React from "react";

const TermsAndConditions = () => {
  return (
    <div>
      <div
        onClick={() => window.history.back()}
        className="flex items-center gap-2 mb-5 cursor-pointer mt-8 ml-5 md:ml-0"
      >
        <Image
          src="/left-arrow.png"
          width={20}
          height={20}
          alt="Back Arrow"
          className="cursor-pointer"
        />
        <h1 className="font-semibold text-xl">TermsAndConditions</h1>
      </div>
      <div className="bg-[#FFF0E6] border border-[#FF6600] p-5 rounded-lg flex items-center mx-10 md:w-2/3">
        <p className="leading-10">
          By using Fab & Fit, you agree to be bound by the following Terms and
          Conditions. Please read them carefully before accessing or using our
          services. If you do not agree to these terms, please do not use our
          app. <br />
          1. Acceptance of Terms <br />
          By downloading, installing, or using Fab & Fit (the "App"), you agree
          to comply with and be bound by these Terms and Conditions. If you do
          not agree with any part of these terms, you should immediately
          discontinue using the App.
          <br />
          2. Account Registration
          <br />
          To use certain features of the App, you may be required to create an
          account. You agree to:
          <br />
          Provide accurate, current, and complete information during the
          registration process.
          <br />
          Maintain the confidentiality of your account and password.
          <br />
          Notify us immediately of any unauthorized use of your account.
          <br />
          You are responsible for all activities that occur under your account.
          <br />
          3. Use of the App
          <br />
          You agree to use the App only for lawful purposes and in accordance
          with these Terms. You agree not to:
          <br />
          Violate any applicable laws or regulations.
          <br />
          Engage in any conduct that could damage, disable, or interfere with
          the App’s functionality.
          <br />
          Upload or transmit any viruses, malware, or harmful code through the
          App.
          <br />
          Attempt to reverse engineer, decompile, or otherwise manipulate the
          App’s code or functionality.
          <br />
          4. Privacy and Data Collection
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
