"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { guestSatisfactionAtom } from "@/app/atoms"
import { useAtom, useAtomValue } from "jotai"

export function GuestSatisfactionDisplay () {
  const discounts = useAtomValue(guestSatisfactionAtom)

  return discounts.length > 0 && (
    <ul className="font-thin">
      {discounts.map((item) => (
        <li key={item}>- {item}</li>
      ))}
    </ul>
  )
}


export function GuestSatisfaction() {
  const [percent, setPercent] = useState(null)
  const [employeeName, setName] = useState("")
  const [discountReason, setDiscountReason] = useState("")
  const [discounts, setDiscounts] = useAtom(guestSatisfactionAtom)

  const addDiscount = () => {
    const newState = [...discounts]
    newState.push(`${employeeName} ${percent}`)
    setDiscounts(newState)
    setPercent(null)
    setName("")
    setDiscountReason("")
  }

  return (
    <div>
      <div className="flex gap-3 items-center">
          <Input placeholder="Server:"
              value={employeeName}
              onChangeValue={setName}
              className="mr-5"
          />
          <Input placeholder="Guest Satisfaction Reason:"
              value={discountReason}
              onChangeValue={setDiscountReason}
              className="mr-5"
          />
          <DropdownMenu>
              <DropdownMenuTrigger asChild>
                  <Button variant="outline">{percent || "Percent"}</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Guest Satisfaction Percent:</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value={percent} onValueChange={setPercent}>
                  <DropdownMenuRadioItem value="10%">10%</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="15%">15%</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="25%">25%</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="50%">50%</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="100%">100%</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
              </DropdownMenuContent>
          </DropdownMenu>
      </div>
      <Button onClick={addDiscount} type="button" variant="secondary" className="my-1 w-full">
            Add Guest Satisfaction
      </Button>
    </div>
  )
}

