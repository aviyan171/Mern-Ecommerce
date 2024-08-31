import { useAppSelector } from 'shared/store/hooks'
import { useCategoryProduct } from '../hooks/useCategoryProduct'
import { CategoryPagination } from './CategoryPagination'
import { selectFilter } from '../store/ProductCategoryFilterSlice'

export function CategoryProductSort() {
  const { changeFilters } = useCategoryProduct()
  const currentPage = useAppSelector(selectFilter).page

  const handleOnSortChange = (value: string) => {
    const v = value as 'oldest' | 'latest'
    changeFilters({
      sort: v
    })
  }

  return (
    <div className="flex justify-between mb-10 items-center">
      <p>Current Page : {currentPage}</p>
      <CategoryPagination />

      <div className="inline">
        <p>
          Sort :
          <span>
            <select className="focus:outline-none px-5" onChange={e => handleOnSortChange(e.target.value)}>
              <option value="latest"> Latest</option>
              <option value="oldest">Oldest</option>
            </select>
          </span>
        </p>
      </div>
    </div>
  )
}
