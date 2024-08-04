import { useState } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import PerfectScrollbar from 'react-perfect-scrollbar'

interface ICategory {
  name: string
  id: string
  lists: string[]
}

interface IShowCategories {
  [key: string]: boolean
}
export function FilterByCategory() {
  const categories: ICategory[] = [
    {
      name: 'Category',
      id: 'categories',
      lists: ['Men', 'Women', 'Bages', 'Clothing', 'Shoes', 'Accessories', 'Kids']
    }
  ]

  const [showCategories, setShowCategories] = useState<IShowCategories>({
    categories: true,
    brand: true,
    filterPrice: true
  })
  const handleShowCategories = (name: string) => {
    setShowCategories({ ...showCategories, [name]: !showCategories[name] })
  }
  return (
    <div>
      {categories.map(item => {
        return (
          <div className="mt-5" key={item.name}>
            <div className="flex justify-between">
              <p className="font-bold text-lg">{item.name}</p>
              <div className="cursor-pointer " onClick={() => handleShowCategories(item.id)}>
                {showCategories[item.id] ? <BsChevronDown /> : <BsChevronUp />}
              </div>
            </div>

            <div className={` text-slate-400  `}>
              <div
                className={` ${
                  showCategories[item.id as string]
                    ? 'h-[190px] transition-[height] duration-500 ease-in-out'
                    : 'h-[0px] transition-[height] duration-500 ease-in-out '
                } overflow-auto`}
              >
                <PerfectScrollbar>
                  {item.lists.map(item => {
                    return (
                      <p key={item} className="mt-3">
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
