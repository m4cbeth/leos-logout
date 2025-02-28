import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input'; // Importing your existing Input component

interface PercentageInputProps extends Omit<React.ComponentProps<typeof Input>, 'value' | 'onChange'> {
  value?: number; // Actual decimal value (e.g., 0.0123 for 1.23%)
  onChange?: (value: number) => void; // Callback with the decimal value
  placeholder?: string;
}

export const ClaudePercentageInput = React.forwardRef<HTMLInputElement, PercentageInputProps>(
  ({ value = 0, onChange, placeholder = '0.00%', ...props }, ref) => {
    // Internal state to track the display format
    const [displayValue, setDisplayValue] = useState<string>('');
    const [isFocused, setIsFocused] = useState<boolean>(false);

    // Format the number as a percentage string with 2 decimal places
    const formatAsPercentage = (num: number): string => {
      return `${(num * 100).toFixed(2)}%`;
    };

    // Update the display value when the actual value changes from outside
    useEffect(() => {
      if (isFocused) {
        setDisplayValue(formatAsPercentage(value));
      } else {
        // Only display a value if it's not zero or the input is focused
        setDisplayValue(value === 0 ? '' : formatAsPercentage(value));
      }
    }, [value, isFocused]);

    // Handle the change from user input
    const handleChangeValue = (inputValue: string) => {
      // Remove the percentage sign and any non-numeric characters except dots
      let cleanedValue = inputValue.replace(/[^\d.]/g, '');
      
      // Ensure we don't have multiple decimal points
      const decimalPoints = cleanedValue.match(/\./g)?.length || 0;
      if (decimalPoints > 1) {
        const firstDecimalIndex = cleanedValue.indexOf('.');
        cleanedValue = cleanedValue.substring(0, firstDecimalIndex + 1) + 
                       cleanedValue.substring(firstDecimalIndex + 1).replace(/\./g, '');
      }

      // Convert string to percentage decimal value (e.g., "1.23" becomes 0.0123)
      const numericValue = cleanedValue === '' ? 0 : parseFloat(cleanedValue) / 100;
      
      // Update the parent component
      onChange?.(numericValue);
      
      // Update the display value with percentage format
      setDisplayValue(numericValue === 0 ? '0.00%' : formatAsPercentage(numericValue));
    };

    // Handle focus
    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      if (value === 0) {
        setDisplayValue('0.00%');
      } else {
        setDisplayValue(formatAsPercentage(value));
      }
      props.onFocus?.(e);
    };

    // Handle blur
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      // Clear display if value is zero
      if (value === 0) {
        setDisplayValue('');
      }
      props.onBlur?.(e);
    };

    return (
      <Input
        {...props}
        ref={ref}
        value={displayValue}
        placeholder={placeholder}
        onChangeValue={handleChangeValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    );
  }
);

ClaudePercentageInput.displayName = "PercentageInput";