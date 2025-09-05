import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const DiscoverSection = () => {
  return (
    <section className="flex gap-3 mt-16 md:mt-36 lg:mt-48 mb-8 max-w-7xl mx-auto">
      {/* Flex child-1 */}
      <div className="w-1/2 gap-2 hidden lg:flex ">
        {/* image-1 */}
        <div className="w-80 h-96 relative rounded-md self-center">
          <Image
            src={"/images/homepage/discoverSectionImage1.jpg"}
            fill
            alt="discover section image 1"
            className="rounded-md object-cover"
          />
        </div>
        {/* combined image group with image 2 and image 3 */}
        <div>
          {/* image-2 */}
          <div className="w-72 h-80 relative rounded-md">
            <Image
              src={"/images/homepage/discoverSectionImage2.jpg"}
              fill
              alt="discover section image 2"
              className="rounded-md object-cover"
            />
          </div>
          {/* image-3 */}
         <div className="w-72 h-80 relative rounded-md mt-2">
            <Image
              src={"/images/homepage/discoverSectionImage3.jpg"}
              fill
              alt="discover section image 3"
              className="rounded-md object-cover"
            />
          </div>
        </div>
      </div>
      {/* Flex child-2 */}
      <div className="w-full lg:w-1/2 px-4 lg:px-0">
        <h1 className="font-bold text-orange-600 text-2xl">
          Discover How Rentalvate
          <br />
          Works for You
        </h1>
        <Card className={"mt-4"}>
          <CardHeader>
            <CardTitle className={"text-xl"}>Tenants</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Easily submit repair requests, upload photos or videos for
              clarity, and track the status of each job in real time—all from
              one convenient and user-friendly platform or app.
            </p>
          </CardContent>
        </Card>
        <Card className={"mt-3"}>
          <CardHeader>
            <CardTitle className={"text-xl"}>Landlords</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Easily approve service jobs, assign the right technicians, track
              their progress, and efficiently manage maintenance tasks across
              multiple properties—all in one streamlined platform designed for
              property managers.
            </p>
          </CardContent>
        </Card>
        <Card className={"mt-3"}>
          <CardHeader>
            <CardTitle className={"text-xl"}>Technicians</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Bid on jobs that match your skills, complete tasks efficiently,
              and receive secure payments — all from one easy-to-use platform
              designed to simplify your freelance work journey.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DiscoverSection;
