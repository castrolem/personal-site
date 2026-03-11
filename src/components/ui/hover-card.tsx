import * as React from "react"
import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card"

import { cn } from "@/lib/utils"

const HoverCard = PreviewCardPrimitive.Root
const HoverCardTrigger = PreviewCardPrimitive.Trigger

function HoverCardContent({
  className,
  align = "start",
  side = "bottom",
  sideOffset = 18,
  ...props
}: React.ComponentPropsWithoutRef<typeof PreviewCardPrimitive.Popup> & {
  align?: React.ComponentPropsWithoutRef<typeof PreviewCardPrimitive.Positioner>["align"]
  side?: React.ComponentPropsWithoutRef<typeof PreviewCardPrimitive.Positioner>["side"]
  sideOffset?: React.ComponentPropsWithoutRef<typeof PreviewCardPrimitive.Positioner>["sideOffset"]
}) {
  return (
    <PreviewCardPrimitive.Portal>
      <PreviewCardPrimitive.Positioner align={align} side={side} sideOffset={sideOffset}>
        <PreviewCardPrimitive.Popup
          data-slot="hover-card-content"
          className={cn(
            "z-50 w-80 rounded-[2rem] border border-border/80 bg-card p-6 text-card-foreground shadow-2xl outline-none transition-[opacity,transform] duration-150 data-[closed]:pointer-events-none data-[ending-style]:opacity-100 data-[ending-style]:translate-y-0 data-[starting-style]:opacity-0 data-[starting-style]:translate-y-1",
            className,
          )}
          {...props}
        />
      </PreviewCardPrimitive.Positioner>
    </PreviewCardPrimitive.Portal>
  )
}

export { HoverCard, HoverCardContent, HoverCardTrigger }
