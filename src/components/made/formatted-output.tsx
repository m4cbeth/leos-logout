"use client"

import { Button } from "@/components/ui/button"
import { useAtomValue } from "jotai"
import * as atoms from "@/app/atoms"
// import { ManagerDiscountDisplay } from "@/components/made/manager-discount";
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
    // const eightySix = useAtomValue(atoms.eightySixAtom)
    const managerDiscounts = useAtomValue(atoms.managerDiscountsAtom)
    const BOHDiscount = useAtomValue(atoms.BOHDiscountAtom)
    const FOHonShift = useAtomValue(atoms.FOHonShiftAtom)
    const staffOffShift = useAtomValue(atoms.staffOffShiftAtom)
    const NBH = useAtomValue(atoms.NBHAtom)
    const owners = useAtomValue(atoms.ownersAtom)
    const trainingDiscounts = useAtomValue(atoms.trainingDiscountsAtom)
    // const pintCard = useAtomValue(atoms.pintCardAtom)
    // const pickleCard = useAtomValue(atoms.pickleCardAtom)
    // const teamNacho = useAtomValue(atoms.teamNachoAtom)
    // const guestSatisfaction = useAtomValue(atoms.guestSatisfactionAtom)

    return (
        <div className="formatted-output-block">
          <Button variant="outline" onClick={copyToPostText} className="my-3 w-full">Copy</Button>
          <div id="output" className=" p-1 m-1 text-sm">
           
            DATE: {todaysDate?.toDateString()}
            <DoubleBreak />
            
            SHIFT: {shift} 
            <DoubleBreak />
            
            SALES: <CurrencyDisplay key={'sales'} amount={sales} />
            <DoubleBreak />
            
            FOOD SALES (excl. discounts): <CurrencyDisplay key={'foodSales'} amount={foodSales} />
            <DoubleBreak />
            
            TAKEOUT SALES: <CurrencyDisplay key={'takeout'} amount={takeout} />
            <DoubleBreak />
            
            DISCOUNT TOTAL: <CurrencyDisplay key={'discountsAmount'} amount={discountsAmount} />
            {` | `}
            {(discountPercent*100).toFixed(2)}%
            <DoubleBreak />
            
            PROMO TOTAL: <CurrencyDisplay key={'promo'} amount={promo} />
            <DoubleBreak />
            
            FLOAT: <CurrencyDisplay key={'float'} amount={float} />
            <DoubleBreak />
            
            FLOW:
            <DoubleBreak />
            ▪︎ {flow}
            <DoubleBreak />            
            
            ISSUES/CONCERNS/COMMENTS:
            <DoubleBreak />
            ▪︎ {issues}
            <DoubleBreak />
            
            86D:
            <EightySixList />
            <DoubleBreak />

            TAKE OUT FLOW/DOWNTIMES/PAUSES/COMMENTS:
            <DoubleBreak />
            ▪︎ 

            {/* <ManagerDiscountDisplay />
            <DoubleBreak /> */}

            <h2 className="mt-5">DISCOUNTS</h2>
            <ul className="list-disc ml-10">
                <li>Manager on shift (x100, x50)
                    <ListCircles>
                        <Listify jotVal={managerDiscounts} />
                    </ListCircles>
                </li>
                <li>BOH on shift (x100, x50)
                    <ListCircles>
                        <Listify jotVal={BOHDiscount} />
                    </ListCircles>
                </li>
                <li>FOH on shift (x50)
                    <ListCircles>
                        <Listify jotVal={FOHonShift} />
                    </ListCircles>
                </li>
                <li>Staff not on shift (x25)
                    <ListCircles>
                        <Listify jotVal={staffOffShift} />
                    </ListCircles>
                </li>
                <li>NBH (x10)
                    <ListCircles>
                        <Listify jotVal={NBH} />
                    </ListCircles>
                </li>
                <li>Owners (x50)
                    <ListCircles>
                        <Listify jotVal={owners} />
                    </ListCircles>
                </li>
                <li>Training Discount (x100)
                    <ListCircles>
                        <Listify jotVal={trainingDiscounts} />
                    </ListCircles>
                </li>
            </ul>
        </div>
    </div>
    )
}

const Listify = ({jotVal}) => (
  <>
    {jotVal ? jotVal.map((entry) => <li key={entry}>{entry}</li>) : <li></li>}
  </>
)

const ListCircles = ({children}) => (
  <ul className="list-[circle] ml-10">
    {children}
  </ul>
)




const DoubleBreak = () => <><br /><br /></>



const copyToPostText = () => {
    const div = document.getElementById("output")
    if (div) {
      navigator.clipboard.writeText(div.innerText)
    }
    alert("Copied! Now go post and have a great night!")
  }
  