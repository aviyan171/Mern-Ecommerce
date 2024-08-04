import { useEffect, useState } from 'react'
import { useCategoryProduct } from '../hooks/useCategoryProduct'
import { useDebounce } from 'shared/hooks/useDebounce'

export function SearchByProductName() {
  const [input, setInput] = useState('')
  const debouncedValue = useDebounce(input, 1000)
  const { changeFilters } = useCategoryProduct()

  const handleChange = (value: string) => {
    setInput(value)
  }

  useEffect(() => {
    changeFilters({
      keyword: debouncedValue
    })
  }, [debouncedValue])

  return (
    <div className="flex flex-col gap-5">
      <p className="font-bold">Search by Product name</p>
      <input
        value={input}
        onChange={e => handleChange(e.target.value)}
        type="search"
        placeholder="Search ..."
        className="border-2 border-gray-300 h-[42px] focus:outline-none pl-5 pr-3 w-full"
      />
    </div>
  )
}
