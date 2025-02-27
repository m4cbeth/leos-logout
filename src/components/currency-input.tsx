import { useState, useEffect } from "react";
import { Input } from "./ui/input";


const displayCurrency = (amount) => {
  return (amount).toLocaleString("en-US", { style: "currency", currency: "USD" })
}

const CurrencyInput = ({jotSet, jotVal = 0}) => {
  const [displayValue, setDisplayValue] = useState(displayCurrency(jotVal) || ""); // Stores formatted currency
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, ""); // Remove non-digits
    if (!input) {
      setDisplayValue("$0.00");
      return;
    }

    const cents = parseInt(input, 10) / 100; // Convert to cents
    setDisplayValue(displayCurrency(cents));
    jotSet(Number(input)/100)
  };

  useEffect(()=>{
    setDisplayValue(displayCurrency(jotVal))
  }, [jotVal])

  return (
    <Input
      jotSet={jotSet}
      className="font-thin w-full"
      type="text"
      inputMode="numeric"
      value={displayValue}
      onChange={handleChange}
      placeholder="$0.00"
    />
  );
};

export default CurrencyInput;