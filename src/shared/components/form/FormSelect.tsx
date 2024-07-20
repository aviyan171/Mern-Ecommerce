import { useFormContext } from 'react-hook-form'

interface IProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  name: string
  data: { label: string; value: string }[]
  defaultOptionName?: string
}
function FormSelect({ name, data, defaultOptionName = '', ...props }: IProps) {
  const { register } = useFormContext()
  return (
    <select {...register(name)} {...props} className="w-full  border-2 border-slate-200 p-3 focus:outline-none rounded-lg bg-transparent ">
      {defaultOptionName && <option disabled>{defaultOptionName}</option>}
      {data.map(i => {
        return (
          <option key={i.value} value={i.value}>
            {i.label}
          </option>
        )
      })}
    </select>
  )
}

export default FormSelect
