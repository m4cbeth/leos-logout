import React, { useState } from "react";

export default function PercentInput({jotaiSetter}) {
  const [rawValue, setRawValue] = useState(""); // Stores digits like "1234"
  const [displayValue, setDisplayValue] = useState("0.00%"); // What the user sees

  const handleChange = (e) => {
    const digits = e.target.value.replace(/\D/g, ""); // Keep only numbers

    if (!digits) {
      setRawValue("");
      setDisplayValue("0.00%");
      return;
    }

    setRawValue(digits);
    console.log(rawValue)
    const numericValue = parseInt(digits, 10) / 10000; // Convert to decimal
    const formatted = (numericValue * 100).toFixed(2) + "%"; // Format as percentage

    setDisplayValue(formatted)
    jotaiSetter(formatted)
  };

  return (
    <input
    className="font-thin w-full"
      type="text"
      value={displayValue}
      onChange={handleChange}
      placeholder="0.00%"
    />
  );
}
