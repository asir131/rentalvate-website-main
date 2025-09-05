import ApartmentInspectionCard from "@/components/DashboardSharedComponents/ApartmentInspectionCard";
import RouteTitle from "@/components/RouteTitle/RouteTitle";

const ApartmentInspectionPage = () => {
  return (
    <section className="max-w-7xl mx-auto">
        <RouteTitle titleName={"Apartment Inspection"}/>
      <ApartmentInspectionCard />
    </section>
  );
};

export default ApartmentInspectionPage;
