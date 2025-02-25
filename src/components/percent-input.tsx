import React, { useState } from "react";
import { Input } from "./ui/input";


export default function PercentInput({jotSet, jotVal = 0}) {
  const [displayValue, setDisplayValue] = useState(`${(jotVal*100).toFixed(2)}` || "0.00"); // What the user sees

  const handleChange = (e) => {
    
    
    const digits = e.target.value.replace(/[^\d\b]/g, ""); // Keep only numbers

    if (!digits) {
      setDisplayValue("0.00");
      return;
    }

    const numericValue = parseInt(digits, 10) / 100; // Convert to decimal

    setDisplayValue(numericValue.toString())
    jotSet(numericValue)
  };

  return (
    <Input
      className="font-thin w-full"
      type="text"
      value={`${displayValue}`}
      onChange={handleChange}
      placeholder="0.00%"
    />
  );
}
