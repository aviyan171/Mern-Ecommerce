import { useQuery } from '@tanstack/react-query'
import { CategoryFilter } from '../types/category-types'
import { getFilteredCategoryProducts } from '../api/category-api'
import { adaptCategoryProduct } from '../utils/category-utils'

const categoryProductFilterKeys = {
  filter: (filter: CategoryFilter) => ['category-product-filters', { filter }] as const
}

export const useGetFilteredCategoryProductQuery = ({ filters, enabled }: { filters: CategoryFilter; enabled: boolean }) => {
  const query = useQuery({
    queryFn: () => getFilteredCategoryProducts(filters),
    queryKey: categoryProductFilterKeys.filter(filters),
    enabled,
    select: adaptCategoryProduct
  })
  return {
    ...query,
    data: query.data
  }
}
