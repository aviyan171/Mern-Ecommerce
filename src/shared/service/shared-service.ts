import { useQuery } from '@tanstack/react-query'
import { getAllCategories } from 'shared/api/shared-api'

const sharedServiceKey = {
  getAllCategory: () => ['categories'] as const
}

export const useGetAllCategoryQuery = () => {
  const query = useQuery({
    queryFn: getAllCategories,
    queryKey: sharedServiceKey.getAllCategory()
  })
  return {
    ...query,
    data: query.data
  }
}
