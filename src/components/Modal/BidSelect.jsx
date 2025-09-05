import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";

const BidSelect = ({ isOpen, close }) => {
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="sm:max-w-[360px] ">
        <div className="flex flex-col gap-5 items-center justify-center px-10 py-5">
          <DialogTitle className="text-center w-full opacity-65">
            Are you sure ,you select this service provider’s bid 
          </DialogTitle>
          
          
        </div>
        <div className="flex gap-2 justify-center items-center h-full">
            <button
            onClick={close}
            className="bg-[#EBEBEB] hover:bg-[#c2bcbc] font-semibold py-1 px-12 rounded-lg transition-colors duration-200 text-lg"
          >
            No
          </button>
          <Link
            href="/manager-jobs/bid-list/payment"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-1 px-12 rounded-lg transition-colors duration-200 text-lg"
          >
            Yes
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BidSelect;
