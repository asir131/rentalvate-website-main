import CreateBidPostForm from "@/components/DashboardSharedComponents/CreateBidPostForm";
import RouteTitle from "@/components/RouteTitle/RouteTitle";
import React from "react";

const page = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <RouteTitle titleName={"Create Bid Post"} />
      <CreateBidPostForm />
    </section>
  );
};

export default page;
