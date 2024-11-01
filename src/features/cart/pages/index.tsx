import CurrentPagesIndicator from 'shared/components/CurrentPagesIndicator'
import MaxWidthLayout from 'shared/layout/MaxWidthLayout'
import CartButtonGroup from '../components/CartButtonGroup'
import CartInfo from '../components/CartInfo'
import CartTotal from '../components/CartTotal'
import CartItemLists from '../components/CartItemLists'

const Cart = () => {
  return (
    <div>
      <CurrentPagesIndicator />
      <div className="py-25">
        <MaxWidthLayout>
          <div className="grid grid-cols-6  gap-7">
            <div className="col-span-4 ">
              <div className="mb-7">
                <CartInfo />
                <CartItemLists />
              </div>
              <CartButtonGroup />
            </div>
            <div className=" col-span-2 ">
              <CartTotal />
            </div>
          </div>
        </MaxWidthLayout>
      </div>
    </div>
  )
}

export default Cart
