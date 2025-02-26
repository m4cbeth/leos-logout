import * as React from "react"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"


const Input = React.forwardRef<HTMLInputElement, 
React.ComponentProps<"input"> & {
  onChangeValue?: (value: string) => void;
  jotSet?: (value: (string | number)[]) => void;
}
>(
  ({ className, jotSet, onChangeValue, value, type, ...props }, ref) => {

    const handleClear = () => {
      console.log('click')
      onChangeValue?.("")
      jotSet([])
    }
    return (
      <div className="relative w-full">
        <input
          type={type}
          value={value}
          className={cn(
            "  my-1    flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )}
          ref={ref}
          onChange={(e) => onChangeValue?.(e.target.value)} // Calls the callback with new value
          {...props}
        />
        <button
          type="button"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-slate-800 p-1 hover:bg-slate-700 focus:outline-none"
          onClick={handleClear}
        >
          <X className="h-3 w-3 text-white"></X>
        </button>
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
