"use client";
import Image from "next/image";
import { Clock, TriangleAlert, Wrench } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useRouter } from "next/navigation";

const IssueCardsWithClientName = ({ data }) => {
  const { bannerImage = "", issue = "", category = "" } = data;
  const router = useRouter();
  const changeRoute=()=>{
    router.push("/dashboard/new-maintenance-request/1")
  }

  return (
    <div className="max-w-5xl mx-2 lg:mx-auto my-4 p-2 shadow rounded-md cursor-pointer" onClick={changeRoute}>
      <div className="flex gap-3 justify-between mb-3 ">
        <div className="flex gap-3 items-center">
          <Avatar className="size-10 md:size-12">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>"User name</AvatarFallback>
          </Avatar>

          <div>
            <p className="font-semibold text-xl">Yamin Hossain</p>
            <p className="text-sm text-gray-500">
              Greenfield Apartments, Unit 302
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-500">May 30, 2025</p>
      </div>

      <div className=" flex flex-col md:flex-row gap-3">
        {/* banner image*/}

        <div className="w-full md:w-xs lg:w-sm">
          <Image
            src={bannerImage}
            width={0}
            height={0}
            alt="jobs banner image"
            sizes="100vw"
            quality={50}
            className="rounded-md w-full h-auto object-cover"
          />
        </div>

        {/* details */}
        <div className="grow place-items-center place-content-center">
          <table className="table-auto">
            <tbody>
              <tr>
                <td className="font-bold flex items-center  gap-2 w-48 p-2">
                  <TriangleAlert /> Issue<span className="ms-auto">:</span>
                </td>
                <td>{issue}</td>
              </tr>
              <tr>
                <td className="font-bold flex items-center gap-2 p-2">
                  <Wrench /> Category <span className="ms-auto">:</span>
                </td>
                <td>{category}</td>
              </tr>
              <tr>
                <td className="font-bold flex items-center gap-2 p-2">
                  <Clock /> Urgency<span className="ms-auto">:</span>
                </td>
                <td>{"High (Urgent)"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IssueCardsWithClientName;
