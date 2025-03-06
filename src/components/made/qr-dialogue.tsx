import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Share2 } from 'lucide-react';
import Image from "next/image";


export function QRCodeDialogue() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Share <Share2/></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] m-5">
        <DialogHeader>
          <DialogTitle>Share the app with the team</DialogTitle>
          <DialogDescription>
            The more the merrier; not to mention consistency!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 mx-auto">
          <Image priority alt="QR Code" width={400} height={400} src="/leos-logout-qrcode.png"/>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog> 
  )
}
