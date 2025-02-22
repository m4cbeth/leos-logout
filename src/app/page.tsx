"use client"

import { DatePicker } from "@/components/made/datepicker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as atom from "@/app/atoms"
import { useAtom } from "jotai";


export default function Home() {

  const [sales, setSales] = useAtom(atom.salesAtom)

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <form>
          <DatePicker/> {/** todo: go into the date picker and make it's state refer to atom */}
          <Input type="number" name="sales" onChange={(e) => setSales(parseFloat(e.target.value))} value={sales} />
        </form>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
