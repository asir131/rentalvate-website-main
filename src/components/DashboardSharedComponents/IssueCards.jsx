"use client";
import Image from "next/image";
import {
  Calendar1,
  CalendarClock,
  Clock,
  DollarSign,
  TriangleAlert,
  Wrench,
} from "lucide-react";
import { useRouter } from "next/navigation";

const IssueCards = ({ data, flag = "", routeName = "/jobs/1" }) => {
  const {
    bannerImage = "",
    issue = "",
    category = "",
    startDate = "",
    deadline = "",
    duration = "",
  } = data;

  const imageStyle = {
    objectFit: "cover",
  };

  const router = useRouter();
  const handleRouting = () => {
    router.push(routeName);
  };

  console.log("Flag for issue card", flag);
  return (
    <div
      className="max-w-5xl h-auto md:h-64 lg:h-72 mx-2 lg:mx-auto my-4 p-2 shadow  rounded-md flex flex-col md:flex-row gap-3 cursor-pointer"
      onClick={handleRouting}
    >
      {/* banner image */}
      <div className="relative">
        <div className="relative h-56 md:h-full w-full md:w-80">
          <Image
            src={bannerImage}
            fill
            alt="jobs banner image"
            style={imageStyle}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={50}
            className="rounded-md"
          />
        </div>
        {flag === "contractor" ? (
          ""
        ) : (
          <div className="absolute bottom-2 left-2 px-8 bg-[#FEE9DC] text-orange-500 rounded-lg shadow-lg">
            Approved
          </div>
        )}
        <div className="absolute bottom-2 right-2 px-4 bg-white/40 backdrop-blur-sm border border-white/40 rounded-lg shadow-lg">
          #A102
        </div>
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
              {flag === "managerDashboardActivePost" ? (
                ""
              ) : (
                <>
                  <td className="font-bold flex items-center gap-2 p-2">
                    <Calendar1 />
                    Start time <span className="ms-auto">:</span>
                  </td>
                  <td>{startDate}</td>
                </>
              )}
            </tr>
            <tr>
              <td className="font-bold flex items-center gap-2 p-2">
                <CalendarClock /> Deadline<span className="ms-auto">:</span>
              </td>
              <td>{deadline}</td>
            </tr>
            <tr>
              {flag === "managerDashboardActivePost" ? (
                ""
              ) : (
                <>
                  <td className="font-bold flex items-center gap-2 p-2">
                    <Clock /> Duration<span className="ms-auto">:</span>
                  </td>
                  <td>{duration}</td>
                </>
              )}
            </tr>
            <tr>
              {flag === "managerDashboardActivePost" ? (
                <>
                  <td className="font-bold flex items-center gap-2 p-2">
                    <Clock /> Urgency<span className="ms-auto">:</span>
                  </td>
                  <td>{"High (Urgent)"}</td>
                </>
              ) : (
                ""
              )}
            </tr>
            <tr>
              {flag === "managerDashboardActivePost" ? (
                <>
                  <td className="font-bold flex items-center gap-2 p-2">
                    <DollarSign /> Price<span className="ms-auto">:</span>
                  </td>
                  <td>{"$ 225 (Fixed)"}</td>
                </>
              ) : (
                ""
              )}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IssueCards;
