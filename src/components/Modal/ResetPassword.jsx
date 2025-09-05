import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";

export default function ResetPassword({ isOpen, close }) {
  // Check if props are being passed correctly
  if (typeof isOpen !== "boolean" || typeof close !== "function") {
    console.error("Invalid props passed to ResetPassword component");
    return null; // or a fallback component
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="sm:max-w-[425px]">
        <div className="flex flex-col gap-5 items-center justify-center px-10 py-5">
          <DialogTitle>
            <Image
              alt="Success"
              width={130}
              height={130}
              src="/reset-success.png" // Ensure this path is correct
            />
          </DialogTitle>
          <h1 className="text-center font-semibold text-xl">
            Password changed
          </h1>
          <div className="text-center text-xs opacity-60">
            Your password has been changed successfully
          </div>
        </div>
        <div className="flex justify-center items-center h-full">
          <Link
            href="/registration/sign-in"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-1 px-12 rounded-lg transition-colors duration-200 text-lg"
          >
            Back to Sign In
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
