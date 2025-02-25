"use client"

import { useState } from "react";
import { useAtom } from "jotai";
import * as atoms from "@/app/atoms"
import { DatePicker } from "@/components/made/datepicker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CurrencyInput from "@/components/currency-input";
import PercentInput from "@/components/percent-input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { OnehundredOrFiftyDropdown } from "@/components/made/100-50-dropdown";



export default function Home() {
  
  // todo date jotai
  const [todaysDate, setDate] =useAtom(atoms.dateAtom)
  const [selectedTab, setSelectedTab] = useState("Day")
  const [sales, setSales] = useAtom(atoms.salesAtom)
  const [foodSales, setFoodSales] = useAtom(atoms.foodSalesAtom)
  const [discountsAmount, setDiscAmount] = useAtom(atoms.discountsAmountAtom)
  const [discountPercent, setDiscPercent] = useAtom(atoms.discountsPercentAtom)
  const [takeout, setTakeout] = useAtom(atoms.takeoutAtom)
  const [promo, setPromo] = useAtom(atoms.promoAtom)
  const [float, setFloat] = useAtom(atoms.floatAtom)
  const [flow, setFlow] = useAtom(atoms.flowAtom)
  const [issues, setIssues] = useAtom(atoms.issuesAtom)
  const [managerDisc, setMangDisc] = useState("")





  return (
    <div className="items-center justify-items-center min-h-screen p-5  max-w-lg mx-auto font-[family-name:var(--font-geist-sans)]">
      
      <main className="flex justify-center mx-1 border w-full p-3 justify-items-center flex-col gap-8 row-start-2 sm:items-start">
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
              <DatePicker jotaiSetter={setDate}/> {/** todo: go into the date picker and make it's state refer to atom */}
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
              <CurrencyInput key="sales" jotaiSetter={setSales}/>
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <h2>
                Food Sales (excl. discounts):
              </h2>
            </div>
            <div  className="font-thin">
              <CurrencyInput key="food" jotaiSetter={setFoodSales}/>
            </div>
          </div>
          <div className="">
            <Heading title="Takeout"/>
            <CurrencyInput key={'takeout'} jotaiSetter={setTakeout}/>
          </div>
          <div className="">
            <div>
              <Heading title="Discounts ($):"/>
            </div>
            <div>
              <CurrencyInput key="discountsdollars" jotaiSetter={setDiscAmount}/>
            </div>
          </div>
          <div>
            <div>
              <Heading title="Discounts (%):"/>
            </div>
            <div>
              <PercentInput key="discountspercent" jotaiSetter={setDiscPercent}/>
            </div>
          </div>
          <div>
            <Heading title="Promo"/>
            <CurrencyInput key={'promo'} jotaiSetter={setPromo}/>
          </div>
          <div>
            <Heading title={'Float'}/>
            <CurrencyInput key={'float'} jotaiSetter={setFloat}/>
          </div>
          <div>
            <Heading title={'Flow'} />
            <Textarea value={flow} onChangeValue={setFlow} placeholder="Describe how the service went." />
          </div>
          <div>
            <Heading title={'Issues/Concerns/Comments'} />
            <Textarea value={flow} onChangeValue={setIssues} placeholder="Describe how the service went." />
          </div>
          <div>
            <Heading title={'DISCOUNTS'} />
            
          </div>

        
        </form>
      </TabsContent>

      <TabsContent value="topost">
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
          DISCOUNTS: ${discountsAmount}{`    |    `}{discountPercent}
          <br />
          PROMOS: ${promo}
          <br />
          FLOAT: ${float}
          <br />
          FLOW: <br />
          {flow}
          <br />
          ISSUES/CONCERNS/COMMENTS: {issues}



        </div>
      </TabsContent>
    </Tabs>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}




const Heading = ({classname="", title}) => (
  <h2 className={classname}>
    {title}
  </h2>
)
const EntryRow = ({children}) => (
  <div className="flex my-2 justify-between">
    {children}
  </div>
)

const copyToPostText = () => {
  const div = document.getElementById("output")
  if (div) {
    navigator.clipboard.writeText(div.innerText)
  }
  alert("Copied! Now go post and have a great night!")
}
