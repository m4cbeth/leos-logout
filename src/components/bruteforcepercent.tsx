"use client"

import { Input } from "./ui/input"
import { useState } from "react"


export default function PercentInput() {

    const [input, setInput] = useState("")

    const handleFocus = () => {
        setInput("0.00%")
    }

    const handleKeyDown = (e) => {
        if (e.key == 'Backspace') {
            console.log()
        }
    }

    const handleChange = (e) => {
        console.log(e)
        if (e.key == "Backspace") {
            console.log("it's working iITSOKW OWRKING")
            // get state
            const current = input.split('')
            const backspaced = current.slice(0,current.length-1).join("")
            setInput(backspaced)
            return
        }
        const val = e.target.value
        const enteredDigit = val.slice(val.length - 1) // Get last character typed
        // get input from state
        const current = input.split("")
        const numberArray = current.filter(char => /^[0-9]$/.test(char))
        numberArray.push(enteredDigit)
        const numbers = numberArray.join('')
        const numericValue = parseFloat(numbers) / 100
        const percent = `${numericValue.toFixed(2)}%`
        setInput(percent)
        }

    return (
        <Input onKeyDown={handleKeyDown} inputMode="numeric" value={input} onFocus={handleFocus} onChange={handleChange} />
    )
}