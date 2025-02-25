"use client"

import { Button } from "@/components/ui/button"
import { useAtomValue } from "jotai"
import * as atoms from "@/app/atoms"
import { ManagerDiscountDisplay } from "@/components/made/manager-discount";
import { EightySixList } from "./eighty-six-list";


export function FormattedLogout() {
    const todaysDate = useAtomValue(atoms.dateAtom)
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
          <div id="output" className="border p-1 m-1 text-sm">
            DATE: {todaysDate.toDateString()}
            <br />
            SALES: ${sales}
            <br />
            FOOD SALES (excl. discounts): ${foodSales}
            <br />
            TAKEOUT SALES: ${takeout}
            <br />
            DISCOUNTS: ${discountsAmount}{` | `}{discountPercent}
            <br />
            PROMOS: ${promo}
            <br />
            FLOAT: ${float}
            <br />
            FLOW:
            <br />
            {flow}
            <br />
            ISSUES/CONCERNS/COMMENTS:
            <br />
            {issues}
            <br />
            86D
            <br />
            <EightySixList />
            <br />
            MANAGER DISCOUNTS:
            <br />
            <ManagerDiscountDisplay />
        </div>
    </div>
    )
}



const copyToPostText = () => {
    const div = document.getElementById("output")
    if (div) {
      navigator.clipboard.writeText(div.innerText)
    }
    alert("Copied! Now go post and have a great night!")
  }
  