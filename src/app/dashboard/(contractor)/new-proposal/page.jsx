import IssueCards from "@/components/DashboardSharedComponents/IssueCards";
import RouteTitle from "@/components/RouteTitle/RouteTitle";
import React from "react";
//upcomingJobs
const dummyData = [
  {
    _id: "1",
    bannerImage: "/images/dashboard/upcomingJobs.jpg",
    issue: "Leaking faucet in kitchen sink causing water wastage",
    category: "Plumbing",
    startDate: "May 31, 2025",
    deadline: "August 31, 2025",
    duration: "04 :00 h",
  },
  {
    _id: "2",
    bannerImage: "/images/dashboard/upcomingJobs.jpg",
    issue: "Leaking faucet in kitchen sink causing water wastage",
    category: "Plumbing",
    startDate: "May 31, 2025",
    deadline: "August 31, 2025",
    duration: "04 :00 h",
  },
];

const page = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <RouteTitle titleName={"New Proposal"} />

      <div className="pt-4">
        {dummyData.map((data) => (
          <IssueCards data={data} key={data._id} routeName={"/dashboard/new-proposal/1"}  flag={"contractor"}/>
        ))}
      </div>
    </section>
  );
};

export default page;
