import Button from 'shared/components/Button'
import { useApplyDiscountMutation } from '../service/cart-service'
import { useEffect, useState } from 'react'
import { useAppSelector } from 'shared/store/hooks'
import { selectDiscountedDetail } from '../store/CartSlice'

function CouponInput() {
  const [discountCode, setDiscountCode] = useState('')
  const appliedDiscount = useAppSelector(selectDiscountedDetail)

  const applyDiscountMutation = useApplyDiscountMutation()

  const applyClick = () => {
    applyDiscountMutation.mutate({ code: discountCode })
  }

  useEffect(() => {
    if (appliedDiscount?.couponName) {
      setDiscountCode(appliedDiscount.couponName)
    }
  }, [appliedDiscount.couponName])

  return (
    <div>
      <p className="mb-9 font-bold">DISCOUNT CODE</p>
      <input
        value={discountCode}
        onChange={e => setDiscountCode(e.target.value)}
        type="search"
        placeholder="Coupon code"
        className="focus:outline-none border-[1px] border-slate-200 h-[48px] px-5"
      />
      <Button text="Apply" onClick={applyClick} disabled={discountCode === appliedDiscount.couponName} />
    </div>
  )
}

export default CouponInput
