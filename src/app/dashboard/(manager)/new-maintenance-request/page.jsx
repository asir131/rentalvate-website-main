import IssueCardsWithClientName from "@/components/DashboardSharedComponents/IssueCardsWithClientName";
import RouteTitle from "@/components/RouteTitle/RouteTitle";

const page = () => {
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
      
    },
  ];
  return (
    <div className="max-w-7xl mx-auto mt-6 md:mt-8 lg:mt-10">
      <RouteTitle titleName={"Maintenance Request"} />
      {dummyData.map((data) => (
        <IssueCardsWithClientName key={data._id} data={data}/>
      ))}
    </div>
  );
};

export default page;
