"use client"
import { eightySixAtom } from "@/app/atoms"
import { useAtomValue } from "jotai"

export function EightySixList () {
    const eightySixItems = useAtomValue(eightySixAtom)
    return (
    eightySixItems.length > 0 && (
      <ul className="font-thin">
        {eightySixItems.map((item) => (
          <li key={item}>- {item}</li>
        ))}
      </ul>
    )
  )
}