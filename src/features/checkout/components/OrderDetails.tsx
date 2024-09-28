import { selectCart, selectDiscountedDetail } from 'features/cart/store/CartSlice'
import Button from 'shared/components/Button'
import Divider from 'shared/components/Divider'
import useCheckUserIsLoggedIn from 'shared/hooks/useCheckUserIsLoggedIn'
import { useCountTotalAmount } from 'shared/hooks/useCountTotalAmount'
import { useAppSelector } from 'shared/store/hooks'

function OrderDetails() {
  const isUserLoggedIn = useCheckUserIsLoggedIn()
  const cartItems = useAppSelector(selectCart)!
  const tax = 200
  const { totalPrice, subTotal } = useCountTotalAmount()
  const { couponName, discountAmount } = useAppSelector(selectDiscountedDetail)

  return (
    <div className="p-8 bg-alabaster w-full sticky top-5">
      <p className="uppercase font-bold text-2xl pb-6">Your order</p>
      <div className="mb-7">
        <Divider />
      </div>
      <div className="flex justify-between mb-4 text-sm">
        <div>Product</div>
        <div>Total</div>
      </div>
      <div className="flex justify-between text-sm ">
        <div className="flex flex-col gap-4">
          {cartItems?.map((item, index) => (
            <p key={index}>
              {index + 1}. {item.name}
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-4">{cartItems?.map((item, index) => <p key={index}>$ {item.total}</p>)}</div>
      </div>
      <div className="py-4">
        <Divider />
      </div>
      <div className="flex justify-between text-sm ">
        <div>
          <p className="mb-2">Subtotal</p>
          <p className="mb-2">Tax</p>
          {!!discountAmount && <p className="mb-2">Discount ( {couponName} )</p>}
          <p>Total</p>
        </div>
        <div className="text-red-500">
          <p className="mb-2">$ {subTotal}</p>
          <p className="mb-2">$ {tax}</p>
          {!!discountAmount && <p className="mb-2"> $ - {discountAmount}</p>}
          <p>$ {totalPrice + 200}</p>
        </div>
      </div>
      <div className="mt-4 mb-6">
        <Divider />
      </div>
      <Button text={isUserLoggedIn ? 'Place Order' : 'Login to Place Order'} fullWidth type="submit" />
    </div>
  )
}

export default OrderDetails
