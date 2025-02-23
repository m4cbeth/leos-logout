"use client"

import { DatePicker } from "@/components/made/datepicker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as atoms from "@/app/atoms"
import { useAtom } from "jotai";
import { useState } from "react";
import CurrencyFormat from 'react-currency-format';
import CurrencyInput from "@/components/currency-input";
// import CurrencyInput from 'react-currency-input-field';



export default function Home() {

  const [sales, setSales] = useAtom(atoms.salesAtom)

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <form className="flex flex-col">
          <h2>
            Date
          </h2>
          <DatePicker/> {/** todo: go into the date picker and make it's state refer to atom */}
          {/* Printed at time needed next as well */}
          {/* <CurrencyInput
            id="sales-input"
            name="sales"
            placeholder="Please enter a number"
            defaultValue={0.00}
            prefix="$"
            decimalsLimit={2}
            onValueChange={(value, name, values) => {setSales(parseFloat(value ?? "0")); console.log(value)}}
          />; */}
          <h2>
            Sales
          </h2>
          <CurrencyInput/>
          
  
        </form>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
