"use client"

import { DatePicker } from "@/components/made/datepicker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as atom from "@/app/atoms"
import { useAtom } from "jotai";
import { useState } from "react";


export default function Home() {

  const [sales, setSales] = useAtom(atom.salesAtom);
  // const [displayValue, setDisplayValue] = useState("");
  const [displayValue, setDisplayValue] = useState("$0.00"); // Start formatted


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9.]/g, ""); // Remove non-numeric characters

    if (value === "" || value === ".") {
      setDisplayValue(value); // Allow user to clear field or start with "."
      return;
    }

    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      setSales(numericValue); // Store raw number
      setDisplayValue(value); // Keep the user’s input as-is for smooth editing
    }
  };

  const handleBlur = () => {
    if (displayValue === "") {
      setDisplayValue(""); // Keep it empty if user deletes everything
      return;
    }

    setDisplayValue(
      sales.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      })
    );
  };

  const handleFocus = () => {
    setDisplayValue(sales.toString()); // Show raw number when editing
  };


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <form>
          <DatePicker/> {/** todo: go into the date picker and make it's state refer to atom */}
          {/* <Input type="number" name="sales" onChange={(e) => {
            const value = e.target.value;
            setSales(value === "" ? 0 : parseFloat(value))
            }} value={sales} /> */}
    <Input
      type="text"
      name="sales"
      value={displayValue}
      onChange={handleChange}
      onBlur={handleBlur}
      onFocus={handleFocus}
    />
        </form>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
