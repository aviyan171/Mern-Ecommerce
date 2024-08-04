import { useEffect, useState } from 'react'
import { useDebounce } from 'shared/hooks/useDebounce'
import { useCategoryProduct } from '../hooks/useCategoryProduct'

export function SearchByPrice() {
  const invalidChar = ['-', 'e', '+', 'E']

  const [input, setInput] = useState(0)

  const debouncedValue = useDebounce(input, 1000)

  const { changeFilters } = useCategoryProduct()

  const handleOnChange = (value: string) => {
    const numberValue = Number(value)
    if (numberValue || value === '') {
      setInput(numberValue)
    }
  }

  useEffect(() => {
    changeFilters({
      price: debouncedValue || ''
    })
  }, [debouncedValue])

  return (
    <div className="">
      <p className="font-bold text-lg mt-7 mb-5">Minimum Price</p>
      <input
        value={input}
        onChange={e => handleOnChange(e.target.value)}
        placeholder="Price"
        className="border-2 border-gray-300 h-[42px] focus:outline-none pl-5 pr-3 w-full "
        onKeyDown={e => {
          if (invalidChar.includes(e.key)) {
            e.preventDefault()
          }
        }}
      />
    </div>
  )
}

export default SearchByPrice
