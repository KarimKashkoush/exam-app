import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        `h-11.5 w-full min-w-0 border border-gray-200 bg-transparent px-2.5 text-base transition-colors
        placeholder:text-muted-foreground
        focus-visible:outline-none
        focus-visible:border-blue-600
        disabled:pointer-events-none disabled:cursor-not-allowed
        disabled:bg-input/50 disabled:opacity-50
        aria-invalid:border-red-600
        md:text-sm`,
        className
      )}
      {...props}
    />
  )
}

export { Input }
