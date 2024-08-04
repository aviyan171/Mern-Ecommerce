import SearchByPrice from './SearchByPrice'
import { FilterByCategory } from './FilterByCategory'
import { SearchByProductName } from './SearchByProductName'

function CategoryBar() {
  return (
    <div>
      <SearchByProductName />
      <FilterByCategory />
      <SearchByPrice />
    </div>
  )
}

export default CategoryBar
