"use client"

import { Input } from "./ui/input"
import { useState } from "react"


export default function PercentInput() {

    const [input, setInput] = useState("")

    const handleFocus = () => {
        setInput("0.00%")
        const input = document.getElementById('percentinput') as HTMLInputElement
        const length = input.value.length;
        input.setSelectionRange(length-1, length-1);
    }

    return (
        <Input id={"percentinput"} inputMode="numeric" value={input} onFocus={handleFocus} />
    )
}