import { BsCart } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import Button from 'shared/components/Button'
import { UI_ROUTES } from 'shared/constants'
import CouponInput from './CouponInput'

function CartTotal() {
  const navigate = useNavigate()
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
            <p className=" text-red-500">$ 169.50</p>
          </div>
          <div className="flex justify-between">
            <p>Total</p>
            <p className=" text-red-500">$ 169.50</p>
          </div>
          <Button text="Proceed to checkout" onClick={() => navigate(UI_ROUTES.checkout)} prefix icon={<BsCart />} />
        </div>
      </div>
    </div>
  )
}

export default CartTotal
