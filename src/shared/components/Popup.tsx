import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './shadcn-components/shadCnPopOver'

type Props = {
  triggerElement: React.ReactNode
  content: React.ReactNode
}
export function Popup({ triggerElement, content }: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>{triggerElement}</PopoverTrigger>
      <PopoverContent className="w-auto p-0">{content}</PopoverContent>
    </Popover>
  )
}
