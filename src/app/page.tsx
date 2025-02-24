"use client"

import { DatePicker } from "@/components/made/datepicker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as atoms from "@/app/atoms"
import { useAtom } from "jotai";
import { useState } from "react";
// import CurrencyFormat from 'react-currency-format';
import CurrencyInput from "@/components/currency-input";
// import CurrencyInput from 'react-currency-input-field';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function Home() {
  
  // todo date jotai
  const [selectedTab, setSelectedTab] = useState("Day")
  const [sales, setSales] = useAtom(atoms.salesAtom)
  const [foodSales, setFoodSales] = useAtom(atoms.foodSalesAtom)


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <form className="flex flex-col">
          <div className="flex">
            <div>
              <Header>
                Date
              </Header>
            </div>
            <div>
              <DatePicker/> {/** todo: go into the date picker and make it's state refer to atom */}
              {/* Printed at time needed next as well */}
            </div>
          </div>
          <div className="flex">
            <div>
              <h2 className="py-3">
                Shift
              </h2>
            </div>
            <div>
              <Tabs defaultValue="Day" value={selectedTab} onValueChange={setSelectedTab}>
                <TabsList>
                  <TabsTrigger value="Day">Day</TabsTrigger>
                  <TabsTrigger value="Night">Night</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          
          <h2 className="py-3">
            Sales
          </h2>
          <CurrencyInput jotaiSetter={setSales}/>
          sales == {sales}
          <h2>
            Food Sales (excl. discounts)
          </h2>
          <CurrencyInput jotaiSetter={setSales}/>
          <h2>

          </h2>
        </form>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}


const Header = ({children}) => (
  <h2 className="py-2">
    {children}
  </h2>
)