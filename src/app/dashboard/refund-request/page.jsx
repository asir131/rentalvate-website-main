import RefundRequestCard from "@/components/DashboardSharedComponents/RefundRequestCard";
import RouteTitle from "@/components/RouteTitle/RouteTitle";

const RefundRequestPage = () => {
  return (
    <section className="max-w-7xl mx-auto p-2">
      <RouteTitle titleName={"Refund Request"} />
      {Array(3).fill().map((_,index)=> <RefundRequestCard key={index}/>)}
    </section>
  );
};

export default RefundRequestPage;
