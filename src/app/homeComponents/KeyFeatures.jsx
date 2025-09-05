import Image from "next/image";

const KeyFeatures = () => {
  return (
    <section className="bg-orange-50 py-7 px-4">
      <h1 className="text-4xl text-center font-semibold text-orange-500 py-5">
        Key Features
      </h1>
      <p className="text-gray-600 text-start md:text-center">
        Everything You Need for Smooth Maintenance Management
      </p>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center max-w-2xl mx-auto py-7 gap-4">
        {/* child-1 */}
        <div className="my-auto">
          <p className="mb-3 text-2xl text-orange-500">Free and Transparent</p>
          <p className="mb-3">Professional Expertise</p>
          <p className="mb-3">No Risk</p>
          <p className="mb-3">GDPR-Compliant</p>
        </div>
        {/* child-2 */}
        <div>
            {/* image */}
          <div className="relative w-full md:w-xs h-50 border border-orange-400 rounded-md">
            <Image
              src={"/images/homepage/keyFeatureSectionImage1.jpg"}
              fill
              alt="keyFeatureSectionImage1"
              className="rounded-md"
            />
          </div>
          <p className="w-full md:w-xs text-gray-600 mt-2">Our consultation is free of charge, and you only pay if you accept an offer.</p>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
