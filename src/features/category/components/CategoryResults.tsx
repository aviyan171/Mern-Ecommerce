import ProductListItems from 'shared/components/ProductListItems'
import { useCategoryProduct } from '../hooks/useCategoryProduct'
import { CategoryProductSort } from './CategoryProductSort'

function CategoryResults() {
  const { data } = useCategoryProduct()

  return (
    <div>
      <CategoryProductSort />
      <div>
        <div className="grid grid-cols-3 gap-x-5 gap-y-10">
          {data?.data.rows?.map(item => {
            const { photo, name, price, _id } = item

            return (
              <div key={_id}>
                <ProductListItems image={photo[0]} name={name} price={price} productId={_id} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CategoryResults
