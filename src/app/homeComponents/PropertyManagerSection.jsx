import { CircleCheckBig } from "lucide-react";
import Image from "next/image";

const PropertyManagerSection = () => {
  return (
    <section className="my-6 md:my-8 lg:my-10">
      <h1 className="text-3xl lg:text-5xl text-center font-semibold">
        Why Property Managers Love{" "}
        <span className="text-orange-400">Rentalvate</span>
      </h1>
      <div className="flex flex-col md:flex-row gap-5 md:gap-3 justify-between items-center max-w-4xl mx-auto my-10 p-2 md:p-4 lg:p-0">
        {/* Image section */}
        <div className="relative w-xs md:w-sm h-50 rounded-md">
          <Image
            src={"/images/homepage/propertyManagerSectionImage1.jpg"}
            fill
            className="rounded-md"
            alt=""
          />
        </div>
        {/* Options */}
        <div>
          <p className="flex gap-3 mb-4 ">
            <CircleCheckBig className="text-orange-500" />
            Save time and avoid back-and-forth calls
          </p>
          <p className="flex gap-3 mb-4 ">
            <CircleCheckBig className="text-orange-500" />
            Reliable technician matching
          </p>
          <p className="flex gap-3 mb-4 ">
            <CircleCheckBig className="text-orange-500" />
            Transparent job tracking
          </p>
          <p className="flex gap-3 mb-4 ">
            <CircleCheckBig className="text-orange-500" />
            One platform for all communication and payments
          </p>
        </div>
      </div>
    </section>
  );
};

export default PropertyManagerSection;
