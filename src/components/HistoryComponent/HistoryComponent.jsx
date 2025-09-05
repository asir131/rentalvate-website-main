"use client";


import { MdKeyboardArrowLeft } from "react-icons/md";
import IssueCards from "../DashboardSharedComponents/IssueCards";
import RouteTitle from "../RouteTitle/RouteTitle";
import SearchItems, { SearchInput } from "../SearchInput/SearchInput";

//Dummy data
const historyDummyData = [
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
  {
    _id: "3",
    bannerImage: "/images/dashboard/upcomingJobs.jpg",
    issue: "Leaking faucet in kitchen sink causing water wastage",
    category: "Cleaning",
    startDate: "May 31, 2025",
    deadline: "August 31, 2025",
    duration: "04 :00 h",
  },
];

const HistoryComponent = ({routeName}) => {
 
  return (
    <div>
      {/* search option */}
      <div className="max-w-7xl mx-auto flex justify-center px-2 py-2 md:py-4">
        <SearchInput />
      </div>

      {/* issue card component */}
      {historyDummyData.map((data) => (
        <IssueCards key={data._id} data={data} routeName={routeName}  flag={"contractor"}/>
      ))}
    </div>
  );
};

export default HistoryComponent;
