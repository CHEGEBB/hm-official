// components/ui/button.tsx
import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const variants = {
      default: 'bg-emerald-500 text-white hover:bg-emerald-600',
      outline: 'border border-slate-700 hover:bg-slate-800',
      ghost: 'hover:bg-slate-800'
    }

    const sizes = {
      default: 'h-10 px-4 py-2',
      sm: 'h-8 px-3',
      lg: 'h-12 px-8'
    }

    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center rounded-lg font-medium transition-colors
          focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500
          disabled:pointer-events-none disabled:opacity-50
          ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }