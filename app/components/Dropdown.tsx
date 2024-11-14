// components/ui/dropdown-menu.tsx
import * as React from "react"

export interface DropdownMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const DropdownMenu = React.forwardRef<HTMLDivElement, DropdownMenuProps>(
  ({ className, children, open, onOpenChange, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`relative inline-block text-left ${className}`}
        {...props}
      >
        {children}
      </div>
    )
  }
)
DropdownMenu.displayName = "DropdownMenu"

const DropdownMenuTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={`inline-flex items-center justify-center rounded-lg p-2
      hover:bg-slate-800 focus:outline-none ${className}`}
    {...props}
  />
))
DropdownMenuTrigger.displayName = "DropdownMenuTrigger"

const DropdownMenuContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={`absolute right-0 mt-2 w-56 rounded-lg border border-slate-700 bg-slate-800
        p-1 shadow-lg ${className}`}
      {...props}
    />
  )
)
DropdownMenuContent.displayName = "DropdownMenuContent"

const DropdownMenuItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={`flex cursor-pointer items-center rounded-lg px-2 py-1.5
        text-sm hover:bg-slate-700 ${className}`}
      {...props}
    />
  )
)
DropdownMenuItem.displayName = "DropdownMenuItem"

export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem }