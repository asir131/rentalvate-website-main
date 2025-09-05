import RouteTitle from "@/components/RouteTitle/RouteTitle";
import SharedForms from "@/components/SharedForms/SharedForms";
import React from "react";

const RequestMaintenancePage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <RouteTitle titleName={"Create New Request"}/>
      <SharedForms />
    </div>
  );
};

export default RequestMaintenancePage;
