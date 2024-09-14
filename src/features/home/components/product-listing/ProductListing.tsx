import MaxWidthLayout from 'shared/layout/MaxWidthLayout'
import ProductListItems from '../../../../shared/components/ProductListItems'
import { useGetLatestProductQuery } from 'features/home/services/produt-services'
import LoadingSpinner from 'shared/components/LoadingSpinner'

function ProductListing() {
  const { data: productLists, isLoading, isFetching } = useGetLatestProductQuery({ enabled: true })

  return (
    <MaxWidthLayout>
      {isLoading || isFetching ? (
        <div className="flex justify-center mb-10">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="pb-15">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-6 ">
            {productLists?.data?.map(item => {
              return (
                <div key={item._id}>
                  <ProductListItems image={item.photo[0]} name={item.name} price={item.price} productId={item._id} stock={item.stock} />
                </div>
              )
            })}
          </div>
        </div>
      )}
    </MaxWidthLayout>
  )
}

export default ProductListing
