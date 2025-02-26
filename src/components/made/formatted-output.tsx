"use client"

import { Button } from "@/components/ui/button"
import { useAtomValue } from "jotai"
import * as atoms from "@/app/atoms"
import { ManagerDiscountDisplay } from "@/components/made/manager-discount";
import { EightySixList } from "./eighty-six-list";
import { CurrencyDisplay } from "../currency-display";


export function FormattedLogout() {
    const todaysDate = useAtomValue(atoms.dateAtom)
    const shift = useAtomValue(atoms.shiftAtom)
    const sales = useAtomValue(atoms.salesAtom)
    const foodSales = useAtomValue(atoms.foodSalesAtom)
    const takeout = useAtomValue(atoms.takeoutAtom)
    const discountsAmount = useAtomValue(atoms.discountsAmountAtom)
    const discountPercent = useAtomValue(atoms.discountsPercentAtom)
    const promo = useAtomValue(atoms.promoAtom)
    const float = useAtomValue(atoms.floatAtom)
    const flow = useAtomValue(atoms.flowAtom)
    const issues = useAtomValue(atoms.issuesAtom)

    return (
        <div className="formatted-output-block">
          <Button variant="outline" onClick={copyToPostText} className="my-3 w-full">Copy</Button>
          <div id="output" className=" p-1 m-1 text-sm">
            DATE {todaysDate?.toDateString()}
            <DoubleBreak />
            SHIFT {shift} 
            <DoubleBreak />
            SALES <CurrencyDisplay key={'sales'} amount={sales} />
            <DoubleBreak />
            FOOD SALES (excl. discounts): <CurrencyDisplay key={'foodSales'} amount={foodSales} />
            <DoubleBreak />
            TAKEOUT SALES <CurrencyDisplay key={'takeout'} amount={takeout} />
            <DoubleBreak />
            DISCOUNTS <CurrencyDisplay key={'discountsAmount'} amount={discountsAmount} />
            {` | `}
            {(discountPercent*100).toFixed(2)}%
            <DoubleBreak />
            PROMOS <CurrencyDisplay key={'promo'} amount={promo} />
            <DoubleBreak />
            FLOAT <CurrencyDisplay key={'float'} amount={float} />
            <DoubleBreak />
            FLOW
            <DoubleBreak />
            {flow}
            <DoubleBreak />            
            ISSUES/CONCERNS/COMMENTS
            <DoubleBreak />
            {issues}
            <DoubleBreak />
            86D
            <EightySixList />
            <DoubleBreak />
            <ManagerDiscountDisplay />
            <DoubleBreak />
            <h2>DISCOUNTS</h2>
            <ul className="list-disc ml-10">
                <li>Manager on shift (x100, x50)
                    <ul className="list-[circle] ml-10">
                        <li></li>
                    </ul>
                </li>
                <li>BOH on shift (x100, x50)
                    <ul className="list-[circle] ml-10">
                        <li></li>
                    </ul>
                </li>
                <li>FOH on shift (x50)
                    <ul className="list-[circle] ml-10">
                        <li></li>
                    </ul>
                </li>
                <li>Staff not on shift (x25)
                    <ul className="list-[circle] ml-10">
                        <li></li>
                    </ul>
                </li>
                <li>NBH (x10)
                    <ul className="list-[circle] ml-10">
                        <li></li>
                    </ul>
                </li>
                <li>Owners (x50)
                    <ul className="list-[circle] ml-10">
                        <li></li>
                    </ul>
                </li>
                <li>Training Discount (x100)
                    <ul className="list-[circle] ml-10">
                        <li>c</li>
                    </ul>
                </li>
                <li>Pint/Pickle cards/ Team nachos (amount of cards/orders)
                    <ul className="list-[circle] ml-10">
                        <li>c</li>
                    </ul>
                </li>
                <li>Guest Satisfaction (% and reason)
                    <ul className="list-[circle] ml-10">
                        <li> c</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
    )
}

const DoubleBreak = () => <><br /><br /></>



const copyToPostText = () => {
    const div = document.getElementById("output")
    if (div) {
      navigator.clipboard.writeText(div.innerText)
    }
    alert("Copied! Now go post and have a great night!")
  }
  