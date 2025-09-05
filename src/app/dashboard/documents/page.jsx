import DocumentCard from "@/components/DashboardSharedComponents/DocumentCard";
import RouteTitle from "@/components/RouteTitle/RouteTitle";

const page = () => {
  return (
    <section className="max-w-7xl mx-auto max-h-screen">
      <RouteTitle titleName={"Document"} />
      {Array.from({ length: 3 }).map((_, index) => (
        <DocumentCard key={index} />
      ))}
    </section>
  );
};

export default page;
