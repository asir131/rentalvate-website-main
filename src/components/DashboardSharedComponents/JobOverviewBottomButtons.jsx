"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";
import GlobalModal from "../GlobalModal/GlobalModal";
import BiddingModal from "./BiddingModal";
import { useRouter } from "next/navigation";
import InspectionRequestModalData from "./InspectionRequestModalData";

const JobOverviewBottomButtons = ({ flag }) => {


  console.log("The flag is :", flag);
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  //Approval handler
  const approvalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="flex flex-col gap-4 max-w-sm justify-center mx-auto my-10 ">
      {/* ===========Modal Starts here================ */}
      <GlobalModal
        isModalOpen={isModalOpen}
        setIsModalOpen={() => setIsModalOpen(!isModalOpen)}
      >
        {flag === "new-proposal" ? (
          <InspectionRequestModalData isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        ) : (
          <BiddingModal />
        )}
      </GlobalModal>
      {/* ===========Modal ends here================ */}

      {flag === "view-offers" ? (
        <>
          <Button variant={"outlineColored"}>Inspection Request</Button>
          <Button onClick={() => router.push("/dashboard/view-offers/1/bid")}>
            Bid
          </Button>
        </>
      ) : flag === "new-proposal" ? (
        <>
          <Button
            variant={"outline"}
            className={"text-orange-500 border-orange-500 w-full"}
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            Inspection Request
          </Button>

          <div className="flex gap-3">
            <Button variant={"outline"} className={"grow"}>
              Decline
            </Button>
            <Button className={"grow"}>Accept</Button>
          </div>
        </>
      ) : (
        <>
          <Link href={"/inbox"}>
            <Button
              variant={"outline"}
              className={"text-orange-500 border-orange-500 w-full"}
            >
              Message Tenant
            </Button>
          </Link>
          <div className="flex gap-3">
            <Button variant={"outline"} className={"grow"}>
              Decline
            </Button>
            <Button className={"grow"} onClick={approvalHandler}>
              Approve
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default JobOverviewBottomButtons;
