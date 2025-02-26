"use client"

import { useState } from "react";
import { Heading } from "@/components/helpers";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import { useAtom, Atom } from "jotai";
import { WritableAtom } from "jotai/vanilla";
import * as atoms from "@/app/atoms";


export default function OtherDiscounts(){
    const [FOHonShift, setFOHonShift] = useAtom(atoms.FOHonShiftAtom);
    const [staffOffShift, setStaffOffShift] = useAtom(atoms.staffOffShiftAtom);
    const [NBH, setNBH] = useAtom(atoms.NBHAtom);
    const [owners, setOwners] = useAtom(atoms.ownersAtom);
    const [trainingDiscounts, setTrainingDiscounts] = useAtom(atoms.trainingDiscountsAtom);
    const [pintCards, setPintCards] = useAtom(atoms.pintCardAtom);
    const [pickleCards, setPickleCards] =useAtom(atoms.pickleCardAtom)
    const [teamNachos, setNachos] = useAtom(atoms.teamNachoAtom)
    const [guestSatisfaction, setGuestSatisfaction] = useAtom(atoms.guestSatisfactionAtom);

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