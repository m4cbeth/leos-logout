"use client"

import { useState } from "react";
import { Heading } from "@/components/helpers";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import { useAtom } from "jotai";
import { FOHonShiftAtom,
    staffOffShiftAtom,
    NBHAtom,
    ownersAtom,
    trainingDiscountsAtom,
    pintCardAtom,
    pickleCardAtom,
    teamNachoAtom,
    guestSatisfactionAtom,
 } from "@/app/atoms";

export default function OtherDiscounts(){
    const [FOHonShift, setFOHonShift] = useAtom(FOHonShiftAtom);
    const [staffOffShift, setStaffOffShift] = useAtom(staffOffShiftAtom);
    const [NBH, setNBH] = useAtom(NBHAtom);
    const [owners, setOwners] = useAtom(ownersAtom);
    const [trainingDiscounts, setTrainingDiscounts] = useAtom(trainingDiscountsAtom);
    const [pintCards, setPintCards] = useAtom(pintCardAtom);
    const [pickleCards, setPickleCards] =useAtom(pickleCardAtom)
    const [teamNachos, setNachos] = useAtom(teamNachoAtom)
    const [guestSatisfaction, setGuestSatisfaction] = useAtom(guestSatisfactionAtom);

    return(
        <>
            <Entry
                title={"FOH on Shift"}
                jotVal={FOHonShift}
                jotSet={setFOHonShift}
                placeholder={"Employee's Name"}
            />
            <Entry
                title={"NBH"}
                jotSet={setNBH}
                jotVal={NBH}
                placeholder={'Name of Local, Restaurant, etc...'}
            />
            <Entry
                title={"Owners"}
                jotSet={setOwners}
                jotVal={owners}
                placeholder={"Owner's Name"}
            />
            <Entry
                title={"Training Discounts (100%)"}
                jotSet={setTrainingDiscounts}
                jotVal={trainingDiscounts}
                placeholder={"Dish / Drink"}
            />
            <Entry
                title={"Pint Cards"}
                jotSet={setPintCards}
                jotVal={pintCards}
                placeholder={"Dish / Drink"}
            />
            <Entry
                title={"Pickle Cards"}
                jotSet={setTrainingDiscounts}
                jotVal={trainingDiscounts}
                placeholder={"Dish / Drink"}
            />
            <Entry
                title={"Team Nacho Cards"}
                jotSet={setTrainingDiscounts}
                jotVal={trainingDiscounts}
                placeholder={"Dish / Drink"}
            />
            
        </>
    )
}

function Entry({jotVal, jotSet, title, placeholder}) {
    
    const [entry, setEntry] = useState("")

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