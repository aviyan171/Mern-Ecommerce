import { Controller, useFormContext } from 'react-hook-form'
import { MaskedNumberInput } from './MaskedNumberInput'
import { Props as ReactPhoneNumberProps } from 'react-phone-number-input'

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  isRequired?: boolean
  multiline?: boolean
  rows?: number
  maskedInput?: boolean
  maskedInputProps?: ReactPhoneNumberProps<any>
}
function FormInput({
  name,
  label,
  isRequired = false,
  multiline = false,
  rows = 7,
  maskedInput = false,
  maskedInputProps,
  ...props
}: IProps) {
  const {
    register,
    control,
    formState: { errors }
  } = useFormContext()

  const fieldErrors = errors[name]?.message

  return (
    <div>
      <p className="mb-3 text-sm">
        {label} <span className="text-red-500">{isRequired ? '*' : ''}</span>
      </p>

      {maskedInput && (
        <Controller
          control={control}
          name={name}
          render={({ field }) => <MaskedNumberInput onChange={field.onChange} {...maskedInputProps} error={!!fieldErrors} />}
        />
      )}

      {!maskedInput && (
        <>
          {!multiline ? (
            <input
              {...register(name)}
              className={`h-[50px] border-[1px] text-sm ${
                !fieldErrors ? ' border-slate-300 ' : 'border-red-300'
              } focus:outline-none pl-5 text-slate-400 w-full bg-transparent`}
              {...props}
            />
          ) : (
            <textarea
              rows={rows}
              {...register(name)}
              className={`border-[1px] ${
                !!fieldErrors ? 'border-red-300' : 'border-slate-300'
              } text-sm focus:outline-none p-5 text-slate-400 w-full bg-transparent`}
            />
          )}
        </>
      )}
    </div>
  )
}

export default FormInput
