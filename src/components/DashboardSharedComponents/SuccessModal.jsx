"use client";
import { Check } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const SuccessModal = () => {
  const router = useRouter();
  return (
    <div className="w-xs md:w-md lg:w-lg h-80 lg:h-96 bg-white rounded-lg flex flex-col gap-3 items-center justify-center">
      <div className="bg-green-600 p-2 rounded-full">
        <Check color="white" size={40} />
      </div>
      <p className="font-semibold text-2xl text-center">Successful !</p>
      <p className="text-center">
        Your request has been submitted <br /> successfully.
      </p>

      <Button className={"w-1/2"} onClick={() => router.push("/dashboard")}>
        Go to Dashboard
      </Button>
    </div>
  );
};

export default SuccessModal;
