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
import { useState, useRef } from "react"

import { managerDiscountsAtom } from "@/app/atoms"
import { useAtom, useAtomValue } from "jotai"


export function ManagerDiscountDisplay () {
  const discounts = useAtomValue(managerDiscountsAtom)
  
  
  return discounts.length > 0 && (
    <ul className="dark:font-thin">
      {discounts.map((item) => (
        <li key={item}>- {item}</li>
      ))}
    </ul>
  )
}
export function ManagerDiscountEntry() {
  const [percent, setPercent] = useState(null)
  const [managerName, setName] = useState("")
  const [discounts, setDiscounts] = useAtom(managerDiscountsAtom)
  const inputRef = useRef(null)
  const focus = () => inputRef.current.focus()

  const addDiscount = () => {
    if (!managerName || !percent) {
      focus()
      return
    }
    const newState = [...discounts]
    newState.push(`${managerName} ${percent}`)
    setDiscounts(newState)
    setPercent(null)
    setName("")
    focus()
  }

  return (
    <div>
      <div className="flex gap-3 items-center">
          <Input placeholder="Manager's Name"
              ref={inputRef}
              value={managerName}
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
      <Button 
        onClick={addDiscount}
        type="button"
        variant="secondary"
        className="my-1 w-full"
      >
            Add Discount
      </Button>
    </div>
  )
}

