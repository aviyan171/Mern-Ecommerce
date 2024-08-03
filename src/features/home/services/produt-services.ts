import { useQuery } from '@tanstack/react-query'
import { getLatestProducts } from '../api/product-api'
import { adaptProductList } from '../utils/product-utils'

const latestProductKey = {
  latestProduct: () => ['latest-product'] as const
}

export const useGetLatestProductQuery = ({ enabled }: { enabled: boolean }) => {
  const query = useQuery({
    queryKey: latestProductKey.latestProduct(),
    queryFn: getLatestProducts,
    enabled,
    select: adaptProductList
  })
  return {
    ...query,
    data: query?.data
  }
}
