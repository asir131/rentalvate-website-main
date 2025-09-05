
import {
  Dialog,
  
  DialogContent,
  
  DialogTitle,
  
} from "@/components/ui/dialog"

import Image from "next/image"
import Link from "next/link"

export default function ManagerSuccessModal({ isOpen, close }) {
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="sm:max-w-[425px]">
        <div className="flex flex-col gap-5 items-center justify-center px-10 py-5">
          <DialogTitle>
            <Image alt="Success" width={90} height={90} src="/ok.png"/>
          </DialogTitle>
          <h1 className="text-center font-semibold text-xl">
            You’re now connected this properties
          </h1>
         <div className="text-center text-xs opacity-60">
            Broadway Apartment <br />  Keokuk Triplex <br />
12th Street Bungalow
         </div>
        </div>
        <div className="flex justify-center items-center h-full">
          <Link
            href="/dashboard"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-1 px-12 rounded-lg transition-colors duration-200 text-lg"
          >
            Go to Dashboard
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  )
}