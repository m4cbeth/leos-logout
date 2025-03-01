"use client"


import { Input } from "@/components/ui/input";
import { useState, useRef } from "react";


export default function PercentageInput() { 
    
    const inputRef = useRef(null)
    
    const [faceState, setFaceState] = useState("")
    
    const handleFocus = () => {
        const input = inputRef.current
        if (faceState == "") {
            setFaceState("0.00%")           
        }
        if (input) {
            input.setSelectionRange(input.value.length - 1, input.value.length - 1)
        }
        
    }


    const handleChange = (e) => {
        console.log(e)
        e.preventDefault()
        setFaceState(() => {

            return e.target.value
        })
    }

    return (
        <>
            <Input id="frank" ref={inputRef} onChange={handleChange} onFocus={handleFocus} value={faceState} placeholder="0.00%"/>
            {faceState}
        </>
    )
}