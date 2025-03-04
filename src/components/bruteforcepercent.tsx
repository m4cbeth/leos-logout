"use client"

import { Input } from "./ui/input"
import { useState } from "react"


export default function PercentageInput({jotSet}) {

    const [input, setInput] = useState("")

    const handleFocus = () => {
        if (input == "") {
            setInput("0.00%")
            jotSet(input)
        }
    }

    const handleKeyDown = (e) => {
        if (e.key == 'Backspace') {
            e.preventDefault()
            // get state            
            const current = input.replace('%', '').replace('.', '').split('')
            const backspaced = current.slice(0,current.length-1).join("")
            const numericValue = parseFloat(backspaced) / 100
            const percent = `${numericValue.toFixed(2)}%`
            setInput(percent)
            jotSet(input)

            return
        }
    }

    const handleChange = (e) => {
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
        jotSet(percent)
        }

    return (
        <Input
            placeholder="0.00%"
            inputMode="numeric"
            onKeyDown={handleKeyDown}
            value={input}
            onFocus={handleFocus}
            onChange={handleChange}
            className="font-thin"
        />
    )
}