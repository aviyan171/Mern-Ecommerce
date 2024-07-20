import { DatePicker } from '../DatePicker'
import { useFormContext } from 'react-hook-form'

type Props = {
  name: string
}
export function FormDatePicker({ name }: Props) {
  const { setValue, watch } = useFormContext()

  const value = watch(name) as Date

  const onChange = (value: Date) => {
    setValue(name, value)
  }

  return <DatePicker date={value} onChange={onChange} />
}
