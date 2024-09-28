import { E164Number } from 'libphonenumber-js/core'
import { useState } from 'react'
import PhoneInput, { Props as ReactPhoneNumberProps } from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'
import '../../../index.css'

type Props = {
  placeholder?: string
  onChange: (value: E164Number) => void
  error?: boolean
} & ReactPhoneNumberProps<any>

export function MaskedNumberInput({ placeholder = '', onChange, error = false, ...others }: Props) {
  const [value, setValue] = useState<E164Number>()

  const handleOnChange = (e?: E164Number) => {
    setValue(e)
    onChange(e!)
  }

  return (
    <PhoneInput
      flags={flags}
      placeholder={placeholder}
      defaultCountry="NP"
      value={value}
      onChange={value => handleOnChange(value)}
      className={`input-phone-number    h-[50px] border-[1px] text-sm ${
        error ? 'border-red-300' : 'border-slate-300'
      }   focus:outline-none pl-5 text-slate-400 w-full bg-transparent `}
      countries={['NP', 'IN', 'US']}
      {...others}
    />
  )
}
