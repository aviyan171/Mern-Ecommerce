import { useQuery } from '@tanstack/react-query'
import { getProductDetail } from '../api/product-detail-api'
import { adaptProductDetailList } from '../utils/product-detail-utils'

const productDetailQueryKey = {
  detail: (id: string) => ['product-detail', id] as const
}
export const useGetProductDetailQuery = ({ id, enabled }: { id: string; enabled: boolean }) => {
  const queryData = useQuery({
    queryFn: () => getProductDetail(id),
    queryKey: productDetailQueryKey.detail(id),
    enabled,
    select: adaptProductDetailList
  })
  return {
    ...queryData,
    queryData: queryData.data
  }
}
