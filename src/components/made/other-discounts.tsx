"use client"

import { useState } from "react";
import { Heading } from "@/components/helpers";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import { useAtom, WritableAtom  } from "jotai";
import * as atoms from "@/app/atoms";


export default function OtherDiscounts(){
    return(
        <>
            <Entry
                title={"FOH on Shift (50%)"}
                atom={atoms.FOHonShiftAtom}
                placeholder={"Employee's Name"}
            />
            <Entry
                title={"Staff off Shift (25%)"}
                atom={atoms.staffOffShiftAtom}
                placeholder={"Employee's Name"}
            />
            <Entry
                title={"NBH (10%)"}
                atom={atoms.NBHAtom}
                placeholder={"Local's name"}
            />
            <Entry
                title={"Owner's (50%)"}
                atom={atoms.ownersAtom}
                placeholder={"Owner's Name"}
            />
            <Entry
                title={"Training (100%)"}
                atom={atoms.trainingDiscountsAtom}
                placeholder={"Dish / Drink"}
            />
            
        </>
    )
}

function Entry<T extends string[]>({ 
    atom, 
    title, 
    placeholder 
  }: { 
    atom: WritableAtom<T, [T], void>;
    title: string; 
    placeholder: string 
  }) {
    const [jotVal, jotSet] = useAtom(atom);
    const [entry, setEntry] = useState("");

    const addDiscount = () => {
        if (!entry) return
        const newState = (Array.isArray(jotVal) ? [...jotVal, entry] : [entry]) as T;
        jotSet(newState)
        setEntry("")
    }

    const DiscountsDisplay = () => (
        jotVal.length > 0 && (
            <ul className="font-thin">
                {jotVal.map((item) => (
                    <li key={item}>- {item}</li>
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