import JobOverview from "@/components/DashboardSharedComponents/JobOverview";
import React from "react";

const page = () => {
  return (
    <section>
      <JobOverview flag={"new-proposal"}/>
    </section>
  );
};

export default page;
