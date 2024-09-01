import { BsCart } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import Button from 'shared/components/Button'
import { UI_ROUTES } from 'shared/constants'
import CouponInput from './CouponInput'
import { useCountTotalAmount } from 'shared/hooks/useCountTotalAmount'
import { useAppSelector } from 'shared/store/hooks'
import { selectDiscountedDetail } from '../store/CartSlice'
import Divider from 'shared/components/Divider'

function CartTotal() {
  const navigate = useNavigate()
  const { totalPrice, subTotal } = useCountTotalAmount()
  const { couponName, discountAmount } = useAppSelector(selectDiscountedDetail)
  const tax = 200

  const total = totalPrice + tax

  return (
    <div className="sticky top-2">
      <div className="mb-15">
        <CouponInput />
      </div>
      <div className="p-10 bg-alabaster">
        <p className="uppercase">Cart total</p>
        <div className="flex flex-col mt-5 gap-5">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p className=" text-red-500">$ {subTotal}</p>
          </div>
          <div className="flex justify-between">
            <p>Tax</p>
            <p className=" text-red-500">$ {tax}</p>
          </div>
          {!!discountAmount && (
            <div className="flex justify-between">
              <p>Discount ( {couponName} )</p>
              <p className=" text-red-500">$ - {discountAmount}</p>
            </div>
          )}
          <Divider />
          <div className="flex justify-between">
            <p>Total</p>
            <p className=" text-red-500">$ {total}</p>
          </div>

          <Button text="Proceed to checkout" onClick={() => navigate(UI_ROUTES.checkout)} prefix icon={<BsCart />} />
        </div>
      </div>
    </div>
  )
}

export default CartTotal
