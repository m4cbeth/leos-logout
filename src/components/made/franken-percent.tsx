"use client"


import { Input } from "@/components/ui/input";
import { useState } from "react";


export default function PercentageInput() {

    const [faceState, setFaceState] = useState("")


    const handleChange = (e) => {
        e.preventDefault()
        setFaceState(e.target.value+e.target.value)
    }

    return (
        <>
            <Input onChange={handleChange} value={faceState}/>
            {faceState}
        </>
    )
}