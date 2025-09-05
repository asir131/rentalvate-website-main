"use client";

import React from "react";

import TenantRegistrationForm from "@/components/Registration/TenantRegistrationForm";
import ManagerRegistrationForm from "@/components/Registration/ManagerRegistrationForm";
import ContractorRegistrationForm from "@/components/Registration/ContractorRegistrationForm";
import { useSelector } from "react-redux";
const Registration = () => {
  
const selectedRole = useSelector((state) => state.user.selectedRole);
const user = selectedRole
  return (
    <div className="flex flex-col mx-4  mt-10 md:mt-10 ">
      <div>
        <h1 className="font-semibold md:ml-100 text-3xl">Registration</h1>
      </div>

      {user == "tenant" && <TenantRegistrationForm />}
      {user == "manager" && <ManagerRegistrationForm />}
      {user == "contractor" && <ContractorRegistrationForm />}
    </div>
  );
};

export default Registration;
