import { FaHistory, FaTools } from "react-icons/fa";
import { RiUserStarFill } from "react-icons/ri";
import { LiaPeopleCarrySolid } from "react-icons/lia";

import TileCards from "@/components/DashboardSharedComponents/TileCards";
import IssueCards from "@/components/DashboardSharedComponents/IssueCards";
import UserWithStatusCards from "@/components/DashboardSharedComponents/UserWithStatusCards";
import NoActiveJobs from "@/components/DashboardSharedComponents/NoJobs";
import Image from "next/image";

// =========================Dummy Data starts here==============================

//upcomingJobs
const upcomingJobsDummyData = [
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

const upcomingInspectionDummyData = [
  {
    _id: "1",
    image: "/images/dashboard/userModel.jpg",
    name: "Sarah Khan",
    rating: 4.8,
    totalReview: 212,
    issue: "Leaking faucet in kitchen sink causing water wastage",
    startDate: "May 31, 2025",
    duration: "04 :00 h",
    status: "Approved",
  },
  {
    _id: "2",
    image: "/images/dashboard/userModel.jpg",
    name: "Sarah Khan",
    rating: 4.8,
    totalReview: 212,
    issue: "Leaking faucet in kitchen sink causing water wastage",
    startDate: "May 31, 2025",
    duration: "04 :00 h",
    status: "Pending",
  },
  {
    _id: "3",
    image: "/images/dashboard/userModel.jpg",
    name: "Sarah Khan",
    rating: 4.8,
    totalReview: 212,
    issue: "Leaking faucet in kitchen sink causing water wastage",
    startDate: "May 31, 2025",
    duration: "04 :00 h",
    status: "Rejected",
  },
];
// =========================Dummy Data ends here====================

const cardIconsAndTitles = [
  {
    title: "Request Maintenance",
    icon: (
      <Image
        src={"/icons/toolsIcon.png"}
        width={56}
        height={56}
        alt="view offer"
      />
    ),
    url: "/dashboard/request-maintenance",
  },

  {
    title: "View History",
    icon: (
      <Image
        src={"/icons/historyIcon.png"}
        width={56}
        height={56}
        alt="view offer"
      />
    ),
    url: "/dashboard/view-history",
  },
  {
    title: "Invite Manager",
    icon: (
      <Image
        src={"/icons/inviteManager.png"}
        width={56}
        height={56}
        alt="view offer"
      />
    ),
    url: "/dashboard/invite-manager",
  },
  {
    title: "Invite Contractor",
    icon: (
      <Image
        src={"/icons/inviteContractor.png"}
        width={56}
        height={56}
        alt="view offer"
      />
    ),
    url: "/dashboard/invite-contractor",
  },
];

const TenantDashboard = () => {
  return (
    <div>
      <h1 className="text-2xl text-center font-semibold text-gray-700 mt-[2%]">
        Tenants dashboard
      </h1>

      {/* Cards section inside dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-6 max-w-5xl mx-auto my-4 px-2 ">
        {cardIconsAndTitles.map(({ title, icon, url }) => (
          <TileCards key={title} title={title} icon={icon} url={url} />
        ))}
      </div>

      {/* Upcoming jobs section */}
      <div>
        <h1 className="text-3xl text-gray-700 font-semibold max-w-5xl mx-auto my-7 px-2 lg:px-0">
          Upcoming Jobs
        </h1>
        {upcomingJobsDummyData ? (
          upcomingJobsDummyData.map((data) => (
            <IssueCards key={data._id} data={data} flag="tenant"/>
          ))
        ) : (
          <NoJobs
            imageSource={"/gif/dashboard/notFoundGif.gif"}
            title={"No active jobs"}
            width={150}
            height={98}
          />
        )}
      </div>

      {/* upcoming inspection */}
      <div>
        <h1 className="text-3xl text-gray-700 font-semibold max-w-5xl mx-auto my-7 px-2 lg:px-0">
          Upcoming Inspections
        </h1>
        {upcomingInspectionDummyData ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-5xl mx-auto p-2 lg:p-0">
            {upcomingInspectionDummyData.map((data) => (
              <UserWithStatusCards key={data._id} data={data} />
            ))}
          </div>
        ) : (
          <NoActiveJobs
            imageSource={"/images/dashboard/searchIcon.svg"}
            title={"No Upcoming Inspection"}
            width={50}
            height={50}
          />
        )}
      </div>
    </div>
  );
};

export default TenantDashboard;
