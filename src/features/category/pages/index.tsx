import CurrentPagesIndicator from 'shared/components/CurrentPagesIndicator'
import CategoryDetails from '../components/CategoryDetails'
import { useEffect } from 'react'
import { useAppDispatch } from 'shared/store/hooks'
import { resetFilter } from '../store/ProductCategoryFilterSlice'

function Category() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    return () => {
      dispatch(resetFilter())
    }
  }, [])

  return (
    <div>
      <CurrentPagesIndicator />
      <CategoryDetails />
    </div>
  )
}

export default Category
