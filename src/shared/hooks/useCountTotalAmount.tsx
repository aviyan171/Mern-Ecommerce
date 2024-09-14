import { selectCart, selectDiscountedDetail } from 'features/cart/store/CartSlice'
import { useMemo } from 'react'
import { useAppSelector } from 'shared/store/hooks'

export function useCountTotalAmount() {
  const cartItems = useAppSelector(selectCart)
  const discountedPrice = useAppSelector(selectDiscountedDetail).discountAmount

  const totalPrice =
    useMemo(() => {
      return cartItems?.reduce((sum, item) => sum + item.total, 0)
    }, [cartItems]) || 0

  return { totalPrice: totalPrice - discountedPrice, subTotal: totalPrice }
}
