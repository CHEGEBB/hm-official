// components/ui/skeleton.tsx
import * as React from "react"

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={`animate-pulse rounded-lg bg-slate-700 ${className}`}
      {...props}
    />
  )
)
Skeleton.displayName = "Skeleton"

export { Skeleton }
