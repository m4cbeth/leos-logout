"use client"

import { useState } from "react";
import { Heading } from "@/components/helpers";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import { useAtom } from "jotai";
import { WritableAtom } from "jotai/vanilla";
import * as atoms from "@/app/atoms";


export default function OtherDiscounts(){
    return(
        <>
            <Entry
                title={"FOH on Shift"}
                atom={atoms.FOHonShiftAtom}
                placeholder={"Employee's Name"}
            />
            
        </>
    )
}

function Entry({ atom, title, placeholder }: { atom: WritableAtom<any[], any[], void>; title: string; placeholder: string }) {
    const [jotVal, jotSet] = useAtom(atom);
    const [entry, setEntry] = useState("");

    const addDiscount = () => {
        if (!entry) return
        const newState = [...jotVal]
        newState.push(entry)
        jotSet(newState)
        setEntry("")
    }

    const DiscountsDisplay = () => (
        jotVal.length > 0 && (
            <ul className="font-thin">
                {jotVal.map((discount) => (
                    <li key={discount}>- {discount}</li>
                ))}
            </ul>
        )
    )
    
    return (
        <>
            <Heading title={title} />
            <DiscountsDisplay />
            <Input  
                value={entry}
                onChangeValue={setEntry}
                className="mr-5"
                placeholder={placeholder}
            />
            <Button 
                onClick={addDiscount}
                type="button"
                variant="secondary"
                className="my-1 w-full"
            >
                Add Discount
            </Button>
        </>
    )
}