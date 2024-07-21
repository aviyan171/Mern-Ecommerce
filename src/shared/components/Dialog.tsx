import React from 'react'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Dialog as ReactDialog
} from './shadcn-components/ShadCnDialog'

interface IProps {
  dialogTrigger: React.ReactNode
  title: React.ReactNode
  description: React.ReactNode
}
export function Dialog({ description, title, dialogTrigger }: IProps) {
  return (
    <ReactDialog>
      <DialogTrigger className="outline-none">{dialogTrigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </ReactDialog>
  )
}
