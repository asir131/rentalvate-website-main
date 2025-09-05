import HistoryComponent from "@/components/HistoryComponent/HistoryComponent";
import RouteTitle from "@/components/RouteTitle/RouteTitle";
import React from "react";

const ViewHistoryPage = () => {
  return (
    <section className="max-w-7xl mx-auto">
      {/* Title */}
      <RouteTitle titleName={"View History"} />
      <HistoryComponent />
    </section>
  );
};

export default ViewHistoryPage;
