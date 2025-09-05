import { Calendar1, Clock, Star, TriangleAlert } from "lucide-react";
import Image from "next/image";

const UserWithStatusCards = ({ data }) => {
  const {
    duration,
    image,
    issue,
    name,
    rating,
    startDate,
    status,
    totalReview,
  } = data;
  return (
    <div className="shadow rounded-md w-full p-4">
      <div className="flex justify-between items-center">
        {/* user profile picture and name section */}
        <div className="flex gap-2 items-center">
          <div className="relative size-10 ">
            <Image
              src={image}
              fill
              alt="user profile photo"
              className="rounded-full object-cover object-center"
              quality={50}
            />
          </div>
          <div>
            <p className="text-xl font-medium">{name}</p>
            <p className="flex items-center gap-2">
              <Star
                fill="#facc15"
                size={16}
                color="#facc15"
                strokeWidth={2.25}
                className="inline-block"
              />
              {rating} ({totalReview})
            </p>
          </div>
        </div>

        {/* Inspection status */}
        <p
          className={`${
            status === "Approved"
              ? "bg-green-300 text-green-600"
              : status === "Pending"
              ? "bg-yellow-300 text-yellow-600"
              : "bg-red-300 text-red-600"
          } h-7 px-4 rounded-full`}
        >
          {status}
        </p>
      </div>

      <table className="table-auto mt-4">
        <tbody>
          <tr>
            <td className="font-bold flex items-center  gap-2 w-48 p-2">
              <TriangleAlert /> Issue<span className="ms-auto">:</span>
            </td>
            <td>{issue}</td>
          </tr>

          <tr>
            <td className="font-bold flex items-center gap-2 p-2">
              <Calendar1 />
              Start time <span className="ms-auto">:</span>
            </td>
            <td>{startDate}</td>
          </tr>

          <tr>
            <td className="font-bold flex items-center gap-2 p-2">
              <Clock /> Deadline<span className="ms-auto">:</span>
            </td>
            <td>{duration}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserWithStatusCards;
