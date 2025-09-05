"use client"
import ContractorDashboard from "./components/ContractorDashboard";
import ManagerDashboard from "./components/ManagerDashboard";
import TenantDashboard from "./components/TenantDashboard";
import { useSelector } from "react-redux";


// const user = {
//   role: selectedRole
// };

const page = () => {
  const selectedRole = useSelector((state) => state.user.selectedRole);
  return (
    <section className="bg-white">
      {selectedRole === "tenant" ? (
        <TenantDashboard />
      ) : selectedRole === "manager" ? (
        <ManagerDashboard />
      ) : selectedRole === "contractor" ? (
        <ContractorDashboard />
      ) : (
        <TenantDashboard />
      )}
    </section>
  );
};

export default page;
