import HistoryComponent from "@/components/HistoryComponent/HistoryComponent";
import RouteTitle from "@/components/RouteTitle/RouteTitle";

const ViewOfferPage = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <RouteTitle titleName={"Job Offers"} />
      <section className="max-w-7xl mx-auto mt-5">
        <HistoryComponent routeName={"/dashboard/view-offers/1"} />
      </section>
    </section>
  );
};

export default ViewOfferPage;
