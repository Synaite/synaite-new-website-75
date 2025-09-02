import { cn } from "@/lib/utils"

function Skeleton({
  className,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "premium" | "shimmer"
}) {
  const variantClasses = {
    default: "animate-pulse rounded-md bg-muted",
    premium: "skeleton-premium rounded-xl bg-gradient-to-r from-muted/50 to-muted/30 border border-white/10",
    shimmer: "animate-shimmer rounded-lg bg-gradient-to-r from-muted/60 via-muted/30 to-muted/60 bg-[length:200%_100%]"
  }

  return (
    <div
      className={cn(variantClasses[variant], className)}
      {...props}
    />
  )
}

export { Skeleton }
