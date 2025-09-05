
import {
  Dialog,
  
  DialogContent,
  
  DialogTitle,
  
} from "@/components/ui/dialog"

import Image from "next/image"
import Link from "next/link"

export default function InviteManager({ isOpen, close }) {
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="sm:max-w-[425px]">
        <div className="flex flex-col gap-5 items-center justify-center px-10 py-5">
          <DialogTitle>
            <Image 
              alt="Invite Manager" 
              width={90} 
              height={90} 
              src="/invite-manager-logo.png"
            />
          </DialogTitle>
          <h1 className="text-center font-semibold text-xl">
            Your Account Is Not Linked <br />to Any Manager
          </h1>
          <p className="text-center opacity-50 text-xs">
            It looks like your account isn't currently matched with any manager. <br /> 
            To get started, please invite your landlord to join the platform.
          </p>
        </div>
        <div className="flex justify-center items-center h-full">
          <Link
            href="/registration/invite-manager"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-1 px-12 rounded-lg transition-colors duration-200 text-lg"
          >
            Invite Manager
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  )
}