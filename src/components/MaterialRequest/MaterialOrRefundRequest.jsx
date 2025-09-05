import Link from "next/link";
import React from "react";

const MaterialOrRefundRequest = ({ id }) => {
  return (
    <div className="">
      <div className="bg-[#FFFFFF] rounded-lg border border-[#FFD0B0] md:flex justify-between  md:gap-40 py-2 px-3">
        <div>
          <h1>Contractor’s Material Request</h1>
        </div>
        <div>
          <p>:$ 25</p>
        </div>
        <div>
          <Link href={`/manager-jobs/${id}/material-request`}>
            Click for view details
          </Link>
        </div>
        <div>
          <p className="text-[#FF6600] w-25 bg-[#FEECDA] text-xs rounded-2xl p-1 px-2">
            Pending
          </p>
        </div>
      </div>

      <div className="bg-[#FFFFFF] mt-2 rounded-lg border border-[#FFD0B0] md:flex justify-between  md:gap-40 py-2 px-3">
        <div>
          <h1>Contractor’s Refund Request</h1>
        </div>
        <div>
          <p>:$ 25</p>
        </div>
        <div>
          <Link href={`/manager-jobs/${id}/refund-request`}>
            Click for view details
          </Link>
        </div>
        <div>
          <p className="text-[#FF6600] w-25 bg-[#FEECDA] text-xs rounded-2xl p-1 px-2">
            Pending
          </p>
        </div>
      </div>
      <div className="text-[#FF6600]  bg-[#FFFFFF] text-lg font-semibold py-1 px-5 rounded-xl border border-[#FF6600] mt-10 mx-20 md:mx-70">
        <Link href={`/manager-jobs/${id}/money-request`}>
          Send Refund Request
        </Link>
      </div>
    </div>
  );
};

export default MaterialOrRefundRequest;
