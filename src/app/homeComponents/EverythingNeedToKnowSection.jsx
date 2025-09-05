import Image from "next/image";

const EverythingNeedToKnowSection = () => {
  return (
    <section className="max-w-7xl mx-auto p-4 flex flex-col md:flex-row justify-between items-start md:items-center">
      {/* Text and app store icon section */}
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-2">
          Everything you need to
          <br /> manage rental jobs
        </h1>
        <p className="text-2xl lg:text-3xl text-orange-600 font-semibold mb-3">
          -now in your pocket.
        </p>
        <p className="text-gray-500 mb-3">
          Whether you're a landlord, tenant, or contractor, the Rentalvate app
          makes it easy to manage requests, approve jobs, upload proof, and
          communicate in real-time — all from your phone.
        </p>
        <p className="text-orange-500 mb-3">
          Download now and simplify rental maintenance like never before.
        </p>
        {/* Download from store */}
        <div className="flex gap-2 max-w-sm">
          <Image
            src="/images/homepage/googlePlayDownload.png"
            alt="download from google play"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto cursor-pointer"
          />
          <Image
            src="/images/homepage/appStoreDownload.png"
            alt="download from google play"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto cursor-pointer"
          />
        </div>
      </div>

      {/* Right side image */}
      <div className="w-full md:w-1/2">
        <Image
          src={"/images/homepage/EverythingNeedToKnowSectionImage.png"}
          //   fill
          alt="hand holding a mobile phone"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default EverythingNeedToKnowSection;
