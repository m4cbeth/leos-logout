import React, { useState } from "react";
import { Input } from "./ui/input";



export function PercentInput2({jotSet, jotVal = 0}) {
  // Initialize with correct format
  const [displayValue, setDisplayValue] = useState((jotVal*100).toFixed(2) || "0.00"); 

  // Handle typing new digits
  const handleChange = (e) => {
    // Strip everything except digits
    const rawInput = e.target.value.replace(/[^\d]/g, "");
    
    if (!rawInput || rawInput === "0") {
      setDisplayValue("0.00");
      jotSet(0);
      return;
    }

    // Format the input with decimal places (shifting left)
    let formatted;
    if (rawInput.length === 1) {
      formatted = "0.0" + rawInput;
    } else if (rawInput.length === 2) {
      formatted = "0." + rawInput;
    } else {
      // Insert decimal point at correct position
      const decimalPos = rawInput.length - 2;
      formatted = rawInput.slice(0, decimalPos) + "." + rawInput.slice(decimalPos);
    }
    
    // Update values
    const numericValue = parseFloat(formatted);
    setDisplayValue(formatted);
    jotSet(numericValue/100);
  };

  // Special handler for backspace
  const handleKeyDown = (e) => {
    if (e.key === "Backspace") {
      e.preventDefault(); // Prevent default backspace behavior
      
      // Get current raw value without % and decimal
      const rawValue = displayValue.replace(/\./g, "");
      
      if (rawValue.length <= 1 || rawValue === "00") {
        setDisplayValue("0.00");
        jotSet(0);
        return;
      }
      
      // Remove the last digit
      const newRawValue = rawValue.slice(0, -1);
      
      // Reformat with decimal
      let formatted;
      if (newRawValue.length === 1) {
        formatted = "0.0" + newRawValue;
      } else if (newRawValue.length === 2) {
        formatted = "0." + newRawValue;
      } else {
        const decimalPos = newRawValue.length - 2;
        formatted = newRawValue.slice(0, decimalPos) + "." + newRawValue.slice(decimalPos);
      }
      
      // Update values
      const numericValue = parseFloat(formatted);
      setDisplayValue(formatted);
      jotSet(numericValue/100);
    }
  };

  return (
    <Input
      className="font-thin w-full"
      type="text"
      value={`${displayValue}%`}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder="0.00%"
    />
  );
}







export default function PercentInput({jotSet, jotVal = 0}) {
  const [displayValue, setDisplayValue] = useState(`${(jotVal*100).toFixed(2)}` || "0.00"); // What the user sees

  const handleChange = (e) => {
    
    
    const digits = e.target.value.replace(/[^\d\b]/g, ""); // Keep only numbers

    if (!digits || digits == 0) {
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
      inputMode="numeric"
      value={`${displayValue}`}
      onChange={handleChange}
      placeholder="0.00%"
    />
  );
}
