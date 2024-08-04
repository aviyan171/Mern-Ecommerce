import CurrentPagesIndicator from 'shared/components/CurrentPagesIndicator'
import CategoryDetails from '../components/CategoryDetails'
import { CategoryPagination } from '../components/CategoryPagination'

function Category() {
  return (
    <div>
      <CurrentPagesIndicator />
      <CategoryDetails />
      <CategoryPagination />
    </div>
  )
}

export default Category
