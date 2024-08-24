import { CategoryFilter } from '../types/category-types'
import { useGetFilteredCategoryProductQuery } from '../service/category-service'
import { useAppDispatch, useAppSelector } from 'shared/store/hooks'
import { selectFilter, setFilter } from '../store/ProductCategoryFilterSlice'

export function useCategoryProduct() {
  const filters = useAppSelector(selectFilter)
  const dispatch = useAppDispatch()
  const { data, isLoading } = useGetFilteredCategoryProductQuery({ enabled: true, filters })

  const changeFilters = (filter: CategoryFilter) => {
    dispatch(
      setFilter({
        ...filter
      })
    )
  }
  return {
    data,
    changeFilters,
    filters,
    count: data?.data?.count || 0,
    filteredResultCount: data?.data?.rows?.length || 0,
    isLoading,
    totalPage: data?.data?.totalPage || 1
  }
}
