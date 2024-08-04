import { useState } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { useGetAllCategoryQuery } from 'shared/service/shared-service'
import { useCategoryProduct } from '../hooks/useCategoryProduct'

interface ICategory {
  name: string
  id: string
  lists: string[]
}

interface IShowCategories {
  [key: string]: boolean
}
export function FilterByCategory() {
  const { data } = useGetAllCategoryQuery()

  const { changeFilters } = useCategoryProduct()

  const categories: ICategory[] = [
    {
      name: 'Category',
      id: 'categories',
      lists: ['All', ...(data?.data || [])] || []
    }
  ]

  const [showCategories, setShowCategories] = useState<IShowCategories>({
    categories: true
  })
  const [selectedValue, setSelectedValue] = useState('All')

  const handleShowCategories = (name: string) => {
    setShowCategories({ ...showCategories, [name]: !showCategories[name] })
  }

  const handleSelectValue = (value: string) => {
    setSelectedValue(value)
    changeFilters({
      category: value === 'All' ? '' : value
    })
  }

  return (
    <div>
      {categories.map(c => {
        return (
          <div className="mt-5" key={c.name}>
            <div className="flex justify-between">
              <p className="font-bold text-lg">{c.name}</p>
              <div className="cursor-pointer " onClick={() => handleShowCategories(c.id)}>
                {showCategories[c.id] ? <BsChevronDown /> : <BsChevronUp />}
              </div>
            </div>

            <div className={` text-slate-400  `}>
              <div
                className={` ${
                  showCategories[c.id as string]
                    ? 'h-[190px] transition-[height] duration-500 ease-in-out'
                    : 'h-[0px] transition-[height] duration-500 ease-in-out '
                } overflow-auto`}
              >
                <PerfectScrollbar>
                  {c.lists.map(item => {
                    return (
                      <p
                        key={item}
                        className={`mt-3 cursor-pointer ${item === selectedValue && 'text-green-500'} hover:bg-gray-100 `}
                        onClick={() => handleSelectValue(item)}
                      >
                        {item}
                      </p>
                    )
                  })}
                </PerfectScrollbar>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
