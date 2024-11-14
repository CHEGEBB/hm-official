'use client'

import * as React from "react"

interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(
  ({ children, className, open, onOpenChange, ...props }, ref) => {
    if (!open) return null

    return (
      <>
        <div 
          className="fixed inset-0 bg-black/50 z-50"
          onClick={() => onOpenChange?.(false)}
        />
        <div
          ref={ref}
          className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 ${className}`}
          {...props}
        >
          {children}
        </div>
      </>
    )
  }
)
Dialog.displayName = "Dialog"

export const DialogTrigger = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>
    {children}
  </div>
))
DialogTrigger.displayName = "DialogTrigger"

export const DialogContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`bg-slate-800 rounded-lg shadow-lg w-full max-w-lg ${className}`}
    {...props}
  />
))
DialogContent.displayName = "DialogContent"

export const DialogHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex flex-col space-y-1.5 p-6 ${className}`}
    {...props}
  />
))
DialogHeader.displayName = "DialogHeader"

export const DialogTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={`text-lg font-semibold leading-none tracking-tight ${className}`}
    {...props}
  />
))
DialogTitle.displayName = "DialogTitle"

export const DialogDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={`text-sm text-slate-400 ${className}`}
    {...props}
  />
))
DialogDescription.displayName = "DialogDescription"

export const DialogFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex justify-end space-x-2 p-6 pt-0 ${className}`}
    {...props}
  />
))
DialogFooter.displayName = "DialogFooter"

export const DialogClose = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={`absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 ${className}`}
    {...props}
  >
    ✕
  </button>
))
DialogClose.displayName = "DialogClose"