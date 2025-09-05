"use client"
import { useRouter } from "next/navigation";
import { MdKeyboardArrowLeft } from "react-icons/md";

const RouteTitle = ({titleName}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.back()}
      className="cursor-pointer flex items-center md:mt-20 gap-2 text-xl font-semibold mb-4"
    >
      <MdKeyboardArrowLeft size={30} />
      <h1 className="align-middle font-semibold">{titleName}</h1>
    </div>
  );
};

export default RouteTitle;
