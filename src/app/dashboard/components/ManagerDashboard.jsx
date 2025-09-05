"use client";
import { FaTools } from "react-icons/fa";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import TileCards from "@/components/DashboardSharedComponents/TileCards";
import { ClockPlus, DollarSign, FileText, Plus } from "lucide-react";
import IssueCards from "@/components/DashboardSharedComponents/IssueCards";
import Link from "next/link";
import Image from "next/image";

const cardIconsAndTitles = [
  {
    title: "New Maintenance Request",
    icon: (
      <Image
        src={"/icons/toolsIcon.png"}
        width={56}
        height={56}
        alt="view offer"
      />
    ),
    url: "/dashboard/new-maintenance-request",
  },
  {
    title: "Post a Job Manually",
    icon: (
      <Image
        src={"/icons/plusIcon.png"}
        width={56}
        height={56}
        alt="view offer"
      />
    ),
    url: "/dashboard/post-job-manually",
  },
  {
    title: "Schedule Apartment Inspection",
    icon: (
      <Image
        src={"/icons/scheduleIcon.png"}
        width={56}
        height={56}
        alt="view offer"
      />
    ),
    url: "/dashboard/apartment-inspection",
  },
  {
    title: "Document/Tax Center",
    icon: (
      <Image
        src={"/icons/documentAndTaxIcon.png"}
        width={56}
        height={56}
        alt="view offer"
      />
    ),
    url: "/dashboard/documents",
  },
  {
    title: "Refund Request",
    icon: (
      <Image
        src={"/icons/dollarIcon.png"}
        width={56}
        height={56}
        alt="view offer"
      />
    ),
    url: "/dashboard/refund-request",
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

//Dummy data for recent active post
const dummyActivePost = [
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
const ManagerDashboard = () => {
  return (
    <div className="max-w-5xl mx-auto mt-6 md:mt-8 lg:mt-10">
      <h1 className="text-center text-2xl text-gray-700 font-semibold">
        Manager Dashboard
      </h1>

      {/* Tiles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-6 mx-auto my-4 px-2 ">
        {cardIconsAndTitles.map(({ title, icon, url }) => (
          <TileCards key={title} title={title} icon={icon} url={url} />
        ))}
      </div>

      {/* Recent Active Post */}
      <div className="flex justify-between items-center">
        <h3 className="text-2xl text-gray-700 font-semibold p-2">
          Recent Active Post
        </h3>
        <Link href={"/jobs"} className="text-orange-500 font-semibold">
          View All
        </Link>
      </div>

      <div>
        {dummyActivePost ? (
          dummyActivePost.map((data) => (
            <IssueCards
              key={data._id}
              data={data}
              flag={"managerDashboardActivePost"}
            />
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
    </div>
  );
};

export default ManagerDashboard;
