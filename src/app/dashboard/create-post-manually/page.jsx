import ManualBiddingProposalForm from "@/components/DashboardSharedComponents/ManualBiddingProposalForm";
import RouteTitle from "@/components/RouteTitle/RouteTitle";
import React from "react";

const page = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <RouteTitle titleName={"Create Manual Proposal"} />
      <ManualBiddingProposalForm />
    </section>
  );
};

export default page;
