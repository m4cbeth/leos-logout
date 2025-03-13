"use client"
import { useState, useRef } from "react"
import * as atoms from '@/app/atoms'
import { useAtom } from "jotai"
import { useAtomValue } from "jotai"
import { eightySixAtom } from "@/app/atoms"
import { Heading } from "../helpers"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

export function EightySixList () {
  const eightySixItems = useAtomValue(eightySixAtom)
  return (
    eightySixItems.length > 0 && (
      <ul className="dark:font-thin">
        {eightySixItems.map((item) => (
          <li key={item}>- {item}</li>
        ))}
      </ul>
    )
  )
}


export default function EightSixEntry() {
  const [eightySixItems, set86Items] = useAtom(atoms.eightySixAtom)
  const [eightySixToAdd, set86] = useState("")
  const inputRef = useRef(null)
  
  const add86 = () => {
    if (eightySixToAdd === "") {
      inputRef.current.focus()
      return
    }
    const new86Items = [...eightySixItems]
    new86Items.push(eightySixToAdd)
    set86Items(new86Items)
    set86("")
    inputRef.current.focus()
  }  

  return(
    <>
      <Heading title="86'd" />
      <EightySixList />
      <Input placeholder="Out of Stock Product"
        ref={inputRef}
        value={eightySixToAdd}
        onChangeValue={set86} />
      <Button onClick={add86} type="button" variant="secondary" className="w-full">
        Add 86&apos;d Item
      </Button>
    </>
  )
}