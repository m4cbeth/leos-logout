import { useState } from "react";
import { Input } from "./ui/input";

const displayCurrency = (amount) => {
  return amount.toLocaleString("en-US", { style: "currency", currency: "USD" })
}

const CurrencyInput = ({jotSet, jotVal = 0}) => {
  const [rawValue, setRawValue] = useState(""); // Stores raw numbers like "1", "12", "123"
  const [displayValue, setDisplayValue] = useState(jotVal || "$0.00"); // Stores formatted currency

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, ""); // Remove non-digits
    if (!input) {
      setRawValue("");
      setDisplayValue("$0.00");
      return;
    }

    setRawValue(input); // Store the raw number
    console.log(rawValue)
    const cents = parseInt(input, 10) / 100; // Convert to cents
    setDisplayValue(displayCurrency(cents));
    jotSet(Number(input)/100)
  };

  return (
    <Input
      className="font-thin w-full"
      type="text"
      value={displayValue}
      onChange={handleChange}
      placeholder="$0.00"
    />
  );
};

export default CurrencyInput;