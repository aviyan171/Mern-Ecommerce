import { Calendar as CalendarIcon } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from './shadcn-components/shadCnPopOver'
import { Button } from './shadcn-components/SadCnButton'
import { cn } from '../utils'
import { Calendar } from './shadcn-components/ShadCnCalendar'
import { format } from 'date-fns'

type Props = {
  date: Date
  onChange: (value: Date) => void
}
export function DatePicker({ date, onChange }: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn('w-full justify-start text-left font-normal bg-transparent', !date && 'text-muted-foreground ')}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={e => onChange(e || new Date())} initialFocus />
      </PopoverContent>
    </Popover>
  )
}
