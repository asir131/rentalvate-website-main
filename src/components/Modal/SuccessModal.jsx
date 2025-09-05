import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import Link from "next/link"

export default function SuccessModal({ isOpen, close }) {
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="sm:max-w-[425px]">
        <div className="flex flex-col gap-5 items-center justify-center px-10 py-5">
          <DialogTitle>
            <Image alt="Success" width={90} height={90} src="/ok.png"/>
          </DialogTitle>
          <h1 className="text-center font-semibold text-xl">
            You're Successfully <br /> Connected!
          </h1>
          <p className="text-center opacity-50 text-xs">
            You've been successfully matched with your landlord.
            You can now submit maintenance requests, track job status, and receive updates directly through the app.
          </p>
          <p className="text-center border-b border-black pb-1">Manager info</p>
          <p className="text-center opacity-50 text-sm">
            John D. Properties<br />
            22B Roseview Apartments
          </p>
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