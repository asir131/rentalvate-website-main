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

export default function TopUp({ isOpen, close }) {
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="sm:max-w-[425px]">
        <div className="flex flex-col gap-5 items-center justify-center px-10 py-5">
          <DialogTitle>
            <Image alt="Success" width={90} height={90} src="/insufficientBalance.png"/>
          </DialogTitle>
          <h1 className="text-center font-semibold text-xl">
            Insufficient Balance
          </h1>
          <p className="text-center opacity-50 text-xs">
            You don’t have enough funds in your wallet to assign this technician. Please top up your wallet to continue.
          </p>
          
        </div>
        <div className="flex justify-center items-center h-full">
          <button
            onClick={close}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-1 px-12 rounded-lg transition-colors duration-200 text-lg"
          >
           Top Up Now
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}