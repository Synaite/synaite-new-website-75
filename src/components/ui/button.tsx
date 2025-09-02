import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden transition-all duration-500",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant hover:shadow-elegant-hover transform hover:scale-[1.02] active:scale-[0.98] hover:translate-y-[-2px]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-elegant hover:shadow-elegant-hover transform hover:scale-[1.02] active:scale-[0.98] hover:translate-y-[-2px]",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm hover:shadow-elegant transform hover:scale-[1.01] active:scale-[0.99] hover:translate-y-[-1px]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm hover:shadow-elegant transform hover:scale-[1.01] active:scale-[0.99] hover:translate-y-[-1px]",
        ghost: "hover:bg-accent hover:text-accent-foreground transform hover:scale-[1.01] active:scale-[0.99] hover:translate-y-[-1px]",
        link: "text-primary underline-offset-4 hover:underline transform hover:scale-[1.01] active:scale-[0.99]",
        premium: "bg-gradient-to-r from-pulse-500 to-pulse-600 text-white font-semibold shadow-premium hover:shadow-glow transform hover:scale-[1.05] active:scale-[0.98] hover:from-pulse-600 hover:to-pulse-700 hover:translate-y-[-3px]",
        cta: "bg-gradient-to-r from-accent-gold to-accent-gold-dark text-white font-bold shadow-premium hover:shadow-glow-lg transform hover:scale-[1.04] active:scale-[0.96] hover:from-accent-gold-dark hover:to-accent-gold hover:translate-y-[-3px] animate-glow-pulse",
        glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 shadow-glass hover:shadow-glow transform hover:scale-[1.02] active:scale-[0.98] hover:translate-y-[-2px]",
        gradient: "bg-gradient-to-r from-primary to-primary-variant text-primary-foreground font-semibold shadow-premium hover:shadow-glow transform hover:scale-[1.03] active:scale-[0.97] hover:from-primary-variant hover:to-primary hover:translate-y-[-2px]",
        magnetic: "bg-gradient-to-r from-pulse-500 to-pulse-600 text-white font-semibold shadow-float hover:shadow-glow-lg transform-gpu transition-all duration-300 ease-out cursor-pointer hover:from-pulse-600 hover:to-pulse-700",
        neon: "bg-gradient-to-r from-pulse-400 to-pulse-600 text-white font-bold shadow-glow hover:shadow-glow-lg border border-pulse-400/50 hover:border-pulse-300 transform hover:scale-[1.05] active:scale-[0.98] animate-glow-pulse hover:translate-y-[-3px]"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg font-semibold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
