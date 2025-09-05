import { Mail } from "lucide-react";
import Image from "next/image";
import React from "react";

const ContactPage = () => {
  return (
    <section className="flex md:h-screen mt-20 md:mt-0 flex-col md:flex-row gap-4 justify-center items-center max-w-5xl min-h-[70vh] mx-auto p-4">
      {/* Image section */}
      <div className="max-w-sm mt-4">
        <Image
          src={"/images/contact/contactUs.png"}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
          alt="display image"
        />
      </div>
      {/* Email Section */}
      <div className="grow">
        <p className="text-center text-xl md:text-2xl font-semibold">
          If you face any kind of problem with
          <br /> our service feel free to contact us.
        </p>
        <div className="border border-orange-500 w-xs p-2 mt-4 rounded-full mx-auto flex items-center gap-4">
          <div className="rounded-full bg-orange-500  text-white p-4">
            <Mail size={16} />
          </div>
          <p className="text-center">remennterprise@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
