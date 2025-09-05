import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle, // Import DialogTitle
} from "@/components/ui/dialog";

export default function LogOut({ isOpen, close }) {
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="w-60">
        {/* Add DialogTitle for accessibility */}
        <DialogTitle>
          <div className="sr-only">Log Out</div> {/* sr-only to visually hide */}
        </DialogTitle>
        
        <div className="flex flex-col gap-2 px-2 py-2">
          <h1 className="font-semibold text-xl">Log Out</h1>
          <p className="text-xs">Are you sure you want to log out your account?</p>
        </div>
        
        <div className="flex justify-between gap-2">
          <button onClick={close} className="bg-[#EDEDED] font-semibold p-1 px-5 rounded-lg">
            Cancel
          </button>
          <button className="bg-[#FF6600] font-semibold p-1 px-3 rounded-lg text-white">
            Log Out
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
