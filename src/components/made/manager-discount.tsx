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

export function ManagerDiscountEntry({setter}) {
  const [percent, setPercent] = React.useState(null)
  const [mangName, setName] = useState("")

  return (
    <div className="flex">
        <Input placeholder="Manager's Name"
            value={mangName}
            onChangeValue={setName}
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
  )
}
