import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, 
React.ComponentProps<"input"> & {
  onChangeValue?: (value: string) => void
}
>(
  ({ className, onChangeValue, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        onChange={(e) => onChangeValue?.(e.target.value)} // Calls the callback with new value
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
