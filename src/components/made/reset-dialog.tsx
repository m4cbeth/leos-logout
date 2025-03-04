"use client"

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
import { useResetAllAtoms } from "@/app/atoms"
import { useState } from "react"

export function ResetDialog() {
    const [open, setOpen] = useState(false)
    const resetAll = useResetAllAtoms()

    const handleReset = () => {
        resetAll()
        setOpen(false)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
            <Button variant="outline">Reset</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
            <DialogHeader>
                <DialogTitle>Reset All Fields</DialogTitle>
                <DialogDescription>
                Reset everything for a new logout
                </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2">
                <Button onClick={handleReset} variant="destructive" className="w-full">
                RESET
                </Button>
            </div>
            <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                <Button type="button" variant="secondary">
                    Close
                </Button>
                </DialogClose>
            </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
