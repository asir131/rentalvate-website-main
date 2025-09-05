import Image from "next/image";

const BannerSection = () => {
  return (
    <section
      className="relative w-full h-[40dvh] lg:h-[60dvh] 
      bg-[url('/images/homepage/bannerImage.webp')] 
      bg-no-repeat bg-cover bg-top"
    >
      {/* background overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/20 to-black/70 mix-blend-multiply"></div>

      {/* banner texts */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-xl md:text-4xl text-[#E85D00] font-bold text-center">
          Property Maintenance <br /> Without the Headaches
        </p>
        <p className="text-center font-normal md:font-semibold text-white">
          From tenant requests to contractor payments and refunds — Rentalvate
          <br />
          automates the chaos, so you can manage smarter, not harder.
        </p>
      </div>

      {/* banner bottom images */}
      <div className="absolute max-w-2xl md:max-w-3xl lg:max-w-4xl w-full left-1/2 -translate-x-1/2 -bottom-10 md:-bottom-30 flex justify-between px-4 lg:px-0">
        {/* Image1 */}
        <div className="relative w-24 h-28  md:w-52 md:h-58 lg:w-60 lg:h-64 border-4 rounded-md">
          <Image
            src={"/images/homepage/bannerBottomImage1.png"}
            fill
            alt="banner bottom image"
            className="rounded-md"
          />
        </div>
        {/* Image 2 */}
        <div className="relative w-30 h-28  md:w-60 md:h-58 lg:w-90 lg:h-64 border-4 rounded-md">
          <Image
            src={"/images/homepage/bannerBottomImage2.png"}
            fill
            alt="banner bottom image"
            className="rounded-md"
          />
        </div>
        {/* Image 3 */}
        <div className="relative w-24 h-28  md:w-52 md:h-58 lg:w-60 lg:h-64 border-4 rounded-md">
          <Image
            src={"/images/homepage/bannerBottomImage3.png"}
            fill
            alt="banner bottom image"
            className="rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
