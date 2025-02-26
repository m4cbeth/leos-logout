"use client"

import { useState } from "react";
import { useAtom } from "jotai";
import * as atoms from "@/app/atoms"
import { DatePicker } from "@/components/made/datepicker";
import { Button } from "@/components/ui/button";
import CurrencyInput from "@/components/currency-input";
import PercentInput from "@/components/percent-input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ManagerDiscountDisplay, ManagerDiscountEntry } from "@/components/made/manager-discount";
import { Input } from "@/components/ui/input";
import { EightySixList } from "@/components/made/eighty-six-list";
import { FormattedLogout } from "@/components/made/formatted-output";
import { BOHDiscountDisplay, BOHDiscountEntry } from "@/components/made/BOH-discount";

export default function Home() {
  
 
  const [selectedTab, setSelectedTab] = useAtom(atoms.shiftAtom)
  const [sales, setSales] = useAtom(atoms.salesAtom)
  const [foodSales, setFoodSales] = useAtom(atoms.foodSalesAtom)
  const [discountsAmount, setDiscAmount] = useAtom(atoms.discountsAmountAtom)
  const [discountPercent, setDiscPercent] = useAtom(atoms.discountsPercentAtom)
  const [takeout, setTakeout] = useAtom(atoms.takeoutAtom)
  const [promo, setPromo] = useAtom(atoms.promoAtom)
  const [float, setFloat] = useAtom(atoms.floatAtom)
  const [flow, setFlow] = useAtom(atoms.flowAtom)
  const [issues, setIssues] = useAtom(atoms.issuesAtom)
  const [eightySixToAdd, set86] = useState("")
  const [eightySixItems, set86Items] = useAtom(atoms.eightySixAtom)

  const add86 = () => {
    const new86Items = [...eightySixItems]
    new86Items.push(eightySixToAdd)
    set86Items(new86Items)
    set86("")
  }




  return (
    <div className="items-center justify-items-center min-h-screen p-5  max-w-lg mx-auto font-[family-name:var(--font-geist-sans)]">
      
      <main className="flex justify-center mb-36 mt-1 border w-full p-3 justify-items-center flex-col gap-8 row-start-2 sm:items-start">
        <h1 className="text-2xl font-thin text-center">Leo&apos;s Logout</h1>


    <Tabs defaultValue="input" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
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
              <DatePicker/> {/** todo: go into the date picker and make it's state refer to atom */}
              {/* Printed at time needed next as well */}
            </div>
          </div>
          <div className="flex flco my-2">
            <div>
              <Heading title="Shift:" />
            </div>
            <div className="ml-5">
              <Tabs defaultValue="Day" value={selectedTab} onValueChange={setSelectedTab}>
                <TabsList>
                  <TabsTrigger value="Day">Day</TabsTrigger>
                  <TabsTrigger value="Night">Night</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
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
            <div>
              <Heading title="Discounts (%):"/>
            </div>
            <div>
              <PercentInput key="discountspercent" jotVal={discountPercent} jotSet={setDiscPercent}/>
            </div>
          </div>
          <div>
            <Heading title="Promos"/>
            <CurrencyInput key={'promo'} jotVal={promo} jotSet={setPromo}/>
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
            <Heading title="86'd Bar Products" />
            <EightySixList />
            <Input placeholder="Out of Stock Product"
              value={eightySixToAdd}
              onChangeValue={set86} />
            <Button onClick={add86} type="button" variant="destructive" className="w-full">
              Add 86&apos;d Item
            </Button>
          </div>
          <div>
            {/* takeout */}
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
            {/* FOH on shift (x50) */}
          </div>
          <div>
            {/* Staff not on shift (x25) */}
          </div>
          <div>
            {/* NBH (x10) */}
          </div>
          <div>
            {/* Owners (x50) */}
          </div>
          <div>
            {/* Training */}
          </div>
          <div>
            {/* Pint / pickle */}
          </div>
          <div>
            {/* Guest Satisfaction (% and reason) */}
          </div>
          <div>
            {/* Promo */}
          </div>
          <div>
            {/* Deletes */}
          </div>
          <div>
            {/* Waste */}
          </div>
          <div>
            {/* Maintenance */}
          </div>
          <div>
            {/* FOH cut times */}
          </div>
        
        </form>
      </TabsContent>

      {/* ----------------------------------------------- */}

      <TabsContent value="topost">
        <FormattedLogout/>
                  



      </TabsContent>
    </Tabs>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}





const Heading = ({classname="", title}) => (
  <h2 className={`${classname} pb-1 mb-1 mt-2`}>
    {title}
  </h2>
)

