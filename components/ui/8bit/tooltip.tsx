"use client"

import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import {
  Tooltip as ShadcnTooltip,
  TooltipContent as ShadcnTooltipContent,
  TooltipProvider as ShadcnTooltipProvider,
  TooltipTrigger as ShadcnTooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

import { Press_Start_2P } from "next/font/google"

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
})

export const tooltipVariants = cva("", {
  variants: {
    font: {
      normal: "",
      retro: pressStart.className,
    },
    variant: {
      default: "bg-primary border-primary",
      destructive: "bg-destructive border-destructive",
      outline: "bg-background border-background",
      secondary: "bg-secondary border-secondary",
    },
  },
  defaultVariants: {
    font: "retro",
    variant: "default",
  },
})

export interface BitTooltipContentProps
  extends React.ComponentPropsWithoutRef<typeof ShadcnTooltipContent>,
    VariantProps<typeof tooltipVariants> {}

function TooltipContent({
  className,
  children,
  font,
  variant,
  ...props
}: BitTooltipContentProps) {
  const color = tooltipVariants({ font, variant })

  return (
    <div className={cn("relative inline-flex", className)}>
      <ShadcnTooltipContent
        {...props}
        data-slot="tooltip-content"
        className={cn("rounded-none", color, className)}
      >
        {children}
        <div
          className={cn(
            "absolute top-1.5 bottom-1.5 -left-1.5 h-1/2 w-1.5 bg-primary",
            color
          )}
        />
        <div
          className={cn(
            "absolute top-1.5 bottom-1.5 -right-1.5 h-1/2 w-1.5 bg-primary ",
            color
          )}
        />
      </ShadcnTooltipContent>
    </div>
  )
}

export interface BitTooltipProps
  extends React.ComponentPropsWithoutRef<typeof ShadcnTooltip>,
    VariantProps<typeof tooltipVariants> {}

function Tooltip({ children, ...props }: BitTooltipProps) {
  return (
    <ShadcnTooltip data-slot="tooltip" {...props}>
      {children}
    </ShadcnTooltip>
  )
}

export interface BitTooltipProviderProps
  extends React.ComponentPropsWithoutRef<typeof ShadcnTooltipProvider> {
  delayDuration?: number
}

function TooltipProvider({
  children,
  delayDuration = 0,
  ...props
}: BitTooltipProviderProps) {
  return (
    <ShadcnTooltipProvider delayDuration={delayDuration} {...props}>
      {children}
    </ShadcnTooltipProvider>
  )
}

function TooltipTrigger({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof ShadcnTooltipTrigger>) {
  return (
    <ShadcnTooltipTrigger data-slot="tooltip-trigger" {...props}>
      {children}
    </ShadcnTooltipTrigger>
  )
}

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger }
