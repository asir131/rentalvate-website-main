import RouteTitle from "@/components/RouteTitle/RouteTitle";
import BiddingForm from "../../components/BiddingForm";

const page = () => {
  return (
    <section className="max-w-5xl mx-auto">
    <RouteTitle titleName={"Bid"}/>
      <BiddingForm />
    </section>
  );
};

export default page;
