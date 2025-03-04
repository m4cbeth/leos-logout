'use client'

import { Heading } from "../helpers"
import { Input } from "../ui/input"
import { useAtom } from "jotai"
import * as atoms from "@/app/atoms"

export default function PintPickleNachos() {

    const [pints, setPints] = useAtom(atoms.pintCardAtom)
    const [pickles, setPickles] = useAtom(atoms.pickleCardAtom)
    const [nachos, setNachos] = useAtom(atoms.teamNachoAtom)

    return (
        <div className="flex gap-3">
            <div>
              <Heading title={'Pint Cards'} />
              <Input value={pints} onChangeValue={setPints} inputMode="numeric" />
            </div>
            <div>
              <Heading title={'Pickle Cards'} />
              <Input value={pickles} onChangeValue={setPickles} inputMode="numeric" />
            </div>
            <div>
              <Heading title={'Team Nachos'} />
              <Input value={nachos} onChangeValue={setNachos} inputMode="numeric" />
            </div>
          </div>
    )
}