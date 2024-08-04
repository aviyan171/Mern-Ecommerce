import { useCategoryProduct } from '../hooks/useCategoryProduct'

export function CategoryProductSort() {
  const { changeFilters, count, filteredResultCount } = useCategoryProduct()

  const handleOnSortChange = (value: string) => {
    const v = value as 'oldest' | 'latest'
    changeFilters({
      sort: v
    })
  }

  return (
    <div className="flex justify-between mb-10">
      <p>
        Showing 1–{filteredResultCount} of {count} results
      </p>
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
