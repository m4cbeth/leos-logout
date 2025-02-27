"use client"

import * as React from "react"

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

import { BOHDiscountAtom } from "@/app/atoms"
import { useAtom, useAtomValue } from "jotai"


export function BOHDiscountDisplay () {
  const discounts = useAtomValue(BOHDiscountAtom)

  return discounts.length > 0 && (
    <ul className="font-thin">
      {discounts.map((item) => (
        <li key={item}>- {item}</li>
      ))}
    </ul>
  )
}
export function BOHDiscountEntry() {
  const [percent, setPercent] = useState(null)
  const [employeeName, setName] = useState("")
  const [discounts, setDiscounts] = useAtom(BOHDiscountAtom)

  const addDiscount = () => {
    const newState = [...discounts]
    newState.push(`${employeeName} ${percent}`)
    setDiscounts(newState)
    setPercent(null)
    setName("")
  }

  return (
    <div>
      <div className="flex gap-3 items-center">
          <Input placeholder="Employee's Name"
              value={employeeName}
              onChangeValue={setName}
              className="mr-5"
          />
          <DropdownMenu>
              <DropdownMenuTrigger asChild>
                  <Button variant="outline">{percent || "Percent"}</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Select Percent Discounted</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value={percent} onValueChange={setPercent}>
                  <DropdownMenuRadioItem value="50%">50%</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="100%">100%</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
              </DropdownMenuContent>
          </DropdownMenu>
      </div>
      <Button onClick={addDiscount} type="button" variant="secondary" className="my-1 w-full">
            Add Discount
      </Button>
    </div>
  )
}

