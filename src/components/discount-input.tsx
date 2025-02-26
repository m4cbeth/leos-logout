"use client"

import { useState } from "react";
import { Heading } from "@/components/helpers";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"

export default function Entry({jotVal, jotSet, title}) {
    
    const [entry, setEntry] = useState("")

    const addDiscount = () => {
        const newState = [...jotVal]
        newState.push(entry)
        jotSet(newState)
        setEntry("")
    }
    
    return (
        <div>
            <Heading title={title} />
            <Input  
                value={entry}
                onChangeValue={setEntry}
                className="mr-5"
            />
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