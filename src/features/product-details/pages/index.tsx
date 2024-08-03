import CurrentPagesIndicator from 'shared/components/CurrentPagesIndicator'
import MaxWidthLayout from 'shared/layout/MaxWidthLayout'
import ProductImages from '../components/ProductImages'
import ProductInformation from '../components/ProductInformation'
import { useSearchParams } from 'react-router-dom'
import { useGetProductDetailQuery } from '../services/product-detail-service'
import { useMemo } from 'react'

function ProductDetails() {
  const [searchParams] = useSearchParams()

  const productId = searchParams.get('id') ?? ''

  const { queryData } = useGetProductDetailQuery({ enabled: !!productId, id: productId })

  const data = useMemo(() => {
    return {
      photo: queryData?.data?.photo || [],
      description: queryData?.data?.description || '',
      price: queryData?.data?.price || '',
      name: queryData?.data?.name || ''
    }
  }, [queryData?.data?.photo, queryData?.data?.description, queryData?.data?.price, queryData?.data?.name])

  return (
    <div>
      <CurrentPagesIndicator center>
        <ProductImages images={data.photo} />
      </CurrentPagesIndicator>
      <div className="mt-25 mb-13">
        <MaxWidthLayout>
          <ProductInformation description={data.description} name={data.name} price={data.price} />
        </MaxWidthLayout>
      </div>
    </div>
  )
}

export default ProductDetails
