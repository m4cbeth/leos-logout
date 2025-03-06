"use client"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { useAtomValue } from "jotai"
import * as atoms from "@/app/atoms"
import { EightySixList } from "./eighty-six";
import { CurrencyDisplay } from "../currency-display";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { GuestSatisfactionDisplay } from "./guest-satisfaction"
  


export function FormattedLogout() {

    const [copied, setCopied] = useState(false)
    
    const todaysDate = useAtomValue(atoms.dateAtom)
    const shift = useAtomValue(atoms.shiftAtom)
    const reportTime = useAtomValue(atoms.reportTimeAtom)
    const sales = useAtomValue(atoms.salesAtom)
    const foodSales = useAtomValue(atoms.foodSalesAtom)
    const takeout = useAtomValue(atoms.takeoutAtom)
    const discountsAmount = useAtomValue(atoms.discountsAmountAtom)
    const discountPercent = useAtomValue(atoms.discountsPercentAtom)
    const promo = useAtomValue(atoms.promoTotalAtom)
    const float = useAtomValue(atoms.floatAtom)
    const flow = useAtomValue(atoms.flowAtom)
    const issues = useAtomValue(atoms.issuesAtom)
    const takeoutIssues = useAtomValue(atoms.takeoutIssuesAtom)
    const managerDiscounts = useAtomValue(atoms.managerDiscountsAtom)
    const BOHDiscount = useAtomValue(atoms.BOHDiscountAtom)
    const FOHonShift = useAtomValue(atoms.FOHonShiftAtom)
    const staffOffShift = useAtomValue(atoms.staffOffShiftAtom)
    const NBH = useAtomValue(atoms.NBHAtom)
    const owners = useAtomValue(atoms.ownersAtom)
    const trainingDiscounts = useAtomValue(atoms.trainingDiscountsAtom)
    const pintCard = useAtomValue(atoms.pintCardAtom)
    const pickleCard = useAtomValue(atoms.pickleCardAtom)
    const teamNacho = useAtomValue(atoms.teamNachoAtom)
    const promoDesc = useAtomValue(atoms.promoDescAtom)
    const deletes = useAtomValue(atoms.deletesAtom)
    const waste = useAtomValue(atoms.wasteAtom)
    const maintenance = useAtomValue(atoms.maintenanceAtom)
    const fohCutTimes = useAtomValue(atoms.fohCutTimesAtom)

    const outputRef = useRef(null)

    const copyToPostText = () => {

        const range = document.createRange()
        const selection = window.getSelection()
        range.selectNodeContents(outputRef.current)
        selection?.removeAllRanges()
        selection?.addRange(range)        
        document.execCommand("copy")
        selection.removeAllRanges()
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
    }


    const CopyButton = () => (
        <TooltipProvider>
            <Tooltip open={copied}>
                <TooltipTrigger asChild>
                    <Button variant="outline" onClick={copyToPostText} className="my-3 w-full">Copy</Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Copied!</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )

    return (
        <div className="formatted-output-block font-thin">
            <CopyButton />








          <div ref={outputRef} id="output" className=" p-1 m-1 text-sm">
           
            DATE: {todaysDate?.toDateString()}
            <DoubleBreak />
            
            SHIFT: {shift} 
            <DoubleBreak />
            
            REPORT PRINTED AT: {reportTime} 
            <DoubleBreak />
            
            SALES: <CurrencyDisplay key={'sales'} amount={sales} />
            <DoubleBreak />
            
            FOOD SALES (excl. discounts): <CurrencyDisplay key={'foodSales'} amount={foodSales} />
            <DoubleBreak />
            
            TAKEOUT SALES: <CurrencyDisplay key={'takeout'} amount={takeout} />
            <DoubleBreak />
            
            DISCOUNT TOTAL: <CurrencyDisplay key={'discountsAmount'} amount={discountsAmount} />
            {` | `}
            {discountPercent}
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
            ▪︎ {takeoutIssues}

            <h2 className="mt-5">DISCOUNTS</h2>
            <ul className="list-disc ml-7">
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
                <li>Pint/Pickle cards/Team nachos (amount of cards/orders)
                    <ListCircles>
                        <li>                            
                            Pint Cards: {pintCard}
                        </li>
                        <li>                            
                            Pickle Cards: {pickleCard}
                        </li>
                        <li>                            
                            Team Nachos: {teamNacho}
                        </li>
                    </ListCircles>
                </li>
                <li>
                    Guest Satisfaction (% and reason)
                        <GuestSatisfactionDisplay/>
                </li>
            </ul>



            <div className="mt-3 mb-0">
            PROMO:
            </div>
            <br />
            ▪︎ {promoDesc}
            <DoubleBreak/>

            DELETES:
            <DoubleBreak/>
            ▪︎ {deletes}
            <DoubleBreak/>

            WASTE:
            <DoubleBreak/>
            ▪︎ {waste}
            <DoubleBreak/>

            MAINTENANCE:
            <DoubleBreak/>
            ▪︎ {maintenance}
            <DoubleBreak/>

            FOH CUT TIMES:
            <DoubleBreak/>
            ▪︎ {fohCutTimes}
            <DoubleBreak/>
        </div>
        



                <CopyButton />





    </div>
    )
}

const Listify = ({jotVal}) => (
  <>
    {jotVal.length ? jotVal.map((entry) => <li key={entry}>{entry}</li>) : <li> </li>}
  </>
)


const ListCircles = ({children}) => (
  <ul className="list-[circle] ml-7">
    {children}
  </ul>
)

const DoubleBreak = () => <><br /><br /></>

  