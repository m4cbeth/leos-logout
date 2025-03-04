"use client"

import { useState } from "react";
import { useAtom } from "jotai";
import * as atoms from "@/app/atoms"
import { DatePicker } from "@/components/made/datepicker";
import { Button } from "@/components/ui/button";
import CurrencyInput from "@/components/currency-input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ManagerDiscountDisplay, ManagerDiscountEntry } from "@/components/made/manager-discount";
import { Input } from "@/components/ui/input";
import { EightySixList } from "@/components/made/eighty-six-list";
import { FormattedLogout } from "@/components/made/formatted-output";
import { BOHDiscountDisplay, BOHDiscountEntry } from "@/components/made/BOH-discount";
import { Heading } from "@/components/helpers";
import OtherDiscounts from "@/components/made/other-discounts";
import PercentageInput from "@/components/bruteforcepercent";
import PintPickleNachos from "@/components/made/pint-pickle-nacho";




export default function Home() {
  
 
  const [shift, setShift] = useAtom(atoms.shiftAtom)
  const [reportTime, setReportTime] = useAtom(atoms.reportTimeAtom)
  const [sales, setSales] = useAtom(atoms.salesAtom)
  const [foodSales, setFoodSales] = useAtom(atoms.foodSalesAtom)
  const [discountsAmount, setDiscAmount] = useAtom(atoms.discountsAmountAtom)
  const [discPercent, setDiscPercent] = useAtom(atoms.discountsPercentAtom)
  const [takeout, setTakeout] = useAtom(atoms.takeoutAtom)
  const [promoTotal, setPromoTotal] = useAtom(atoms.promoTotalAtom)
  const [float, setFloat] = useAtom(atoms.floatAtom)
  const [flow, setFlow] = useAtom(atoms.flowAtom)
  const [issues, setIssues] = useAtom(atoms.issuesAtom)
  const [eightySixToAdd, set86] = useState("")
  const [eightySixItems, set86Items] = useAtom(atoms.eightySixAtom)
  const [takeoutIssues, setTakeoutIssues] = useAtom(atoms.takeoutIssuesAtom)
  const [promoDesc, setPromoDesc] = useAtom(atoms.promoDescAtom)
  const [deletes, setDeletes] = useAtom(atoms.deletesAtom)
  const [waste, setWaste] = useAtom(atoms.wasteAtom)
  const [maintenance, setMaintenance] = useAtom(atoms.maintenanceAtom)
  const [fohCutTimes, setFohCutTimes] = useAtom(atoms.fohCutTimesAtom)


  const add86 = () => {
    const new86Items = [...eightySixItems]
    new86Items.push(eightySixToAdd)
    set86Items(new86Items)
    set86("")
  }




  return (
    <div className="items-center justify-items-center min-h-screen p-5  max-w-lg mx-auto font-[family-name:var(--font-geist-sans)]">
      
      <main className="flex justify-center mb-36 mt-1 border w-full p-3 justify-items-center flex-col gap-8 row-start-2 sm:items-start">
        <h1 className="self-center text-2xl font-thin">Leo&apos;s Logout</h1>


    <Tabs defaultValue="input" className="w-full">
      <TabsList className="grid w-full grid-cols-2 sticky top-0 z-10 shadow">
        <TabsTrigger value="input">Input</TabsTrigger>
        <TabsTrigger value="topost">Formatted</TabsTrigger>
      </TabsList>
      <TabsContent value="input">
        <form className="flex flex-col">
          <div className="flex flex-col my-2">
            <div>
              <Heading title="Date:"/>
            </div>
            <div>
              <DatePicker/>
            </div>
          </div>
          <div className="flex items-center my-2">
            <div>
              Shift:
            </div>
            <div className="ml-5">
              <Tabs value={shift} onValueChange={setShift}>
                <TabsList>
                  <TabsTrigger value="Day">Day</TabsTrigger>
                  <TabsTrigger value="Night">Night</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
          <div>
            <Heading title={'Report printed at:'} />
            <Input value={reportTime} onChangeValue={setReportTime} placeholder="Enter report time"/>
          </div>
          <div className="flex flex-col my-2 justify-between">
            <div>
              <Heading title="Sales:"/>
            </div>
            <div className="">
              <CurrencyInput key="sales" jotVal={sales} jotSet={setSales}/>
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <Heading title="Food Sales (excl. discounts):" />
            </div>
            <div  className="font-thin">
              <CurrencyInput key="food" jotVal={foodSales} jotSet={setFoodSales}/>
            </div>
          </div>
          <div className="">
            <Heading title="Takeout"/>
            <CurrencyInput key={'takeout'} jotVal={takeout} jotSet={setTakeout}/>
          </div>
          <div className="">
            <div>
              <Heading title="Discounts ($):"/>
            </div>
            <div>
              <CurrencyInput key="discountsdollars" jotVal={discountsAmount} jotSet={setDiscAmount}/>
            </div>
          </div>
          <div>
            <Heading title="Discounts (%):"/>
            <PercentageInput jotVal={discPercent} jotSet={setDiscPercent} />
          </div>
          <div>
            <Heading title="Promos"/>
            <CurrencyInput key={'promo'} jotVal={promoTotal} jotSet={setPromoTotal}/>
          </div>
          <div>
            <Heading title={'Float'}/>
            <CurrencyInput key={'float'} jotVal={float} jotSet={setFloat}/>
          </div>
          <div>
            <Heading title={'Flow'} />
            <Textarea value={flow} onChangeValue={setFlow} placeholder="Describe how the service went." />
          </div>
          <div>
            <Heading title={'Issues/Concerns/Comments'} />
            <Textarea value={issues} onChangeValue={setIssues} placeholder="Describe how the service went." />
          </div>
          <div>
            <Heading title="86'd" />
            <EightySixList />
            <Input placeholder="Out of Stock Product"
              value={eightySixToAdd}
              onChangeValue={set86} />
            <Button onClick={add86} type="button" variant="secondary" className="w-full">
              Add 86&apos;d Item
            </Button>
          </div>
          <div>
            <Heading title={'Takeout flow/Downtimes/Pauses/Comments'} />
            <Textarea value={takeoutIssues} onChangeValue={setTakeoutIssues} placeholder="Describe any issues" />
          </div>
          <div>
            <Heading title={'Manager Discounts'} />
            <ManagerDiscountDisplay />
            <ManagerDiscountEntry />            
          </div>
          <div>
            <Heading title={'BOH Discounts'}/>
            <BOHDiscountDisplay />
            <BOHDiscountEntry />
          </div>
          <div>
            <OtherDiscounts />            
          </div>
          <div>
            <PintPickleNachos />
          </div>
          <div>
            {/* Guest Satisfaction (% and reason) */}            
          </div>


          <div>
            <Heading title={'Promo'}/>
            <Textarea value={promoDesc} onChangeValue={setPromoDesc} placeholder="Describe the promos"/>
          </div>
          <div>
            <Heading title={'Deletes'}/>
            <Textarea value={deletes} onChangeValue={setDeletes} placeholder="Describe the deletes"/>
          </div>
          <div>
            <Heading title={'Waste'}/>
            <Textarea value={waste} onChangeValue={setWaste} placeholder="Describe all waste"/>
          </div>
          <div>
            <Heading title={'Maintenance'}/>
            <Textarea value={maintenance} onChangeValue={setMaintenance} placeholder="Describe any maintenance notes"/>
          </div>
          <div>
            <Heading title={'FOH Cut Times'}/>
            <Textarea value={fohCutTimes} onChangeValue={setFohCutTimes} placeholder="Names and times of FOH cuts"/>
          </div>
        </form>
      </TabsContent>
        

        

      {/* ----------------------------------------------- */}

      <TabsContent value="topost">


        <FormattedLogout/>
                  

      </TabsContent>
      <div className="  
        font-black
        text-outline
        text-red-700
        text-5xl
        italic
        flex items-center justify-center 
        h-[33vh] 
        mb-5
        bg-[url('/dangerzone.webp')]">
        DANGERZONE
      </div>

      <div className="
        h-[33vh]

      ">
        <ResetButton />
      </div>

    </Tabs>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>

    </div>
  );
}



const ResetButton = () => {
  const resetAll = atoms.useResetAllAtoms()
  return (
    <Button onClick={resetAll} className="text-5xl font-black text-black w-full h-full" variant="destructive">
          RESET FORM
    </Button>
  )
}



