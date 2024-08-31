import { selectCart } from 'features/cart/store/CartSlice'
import { useAppSelector } from 'shared/store/hooks'

export function useCountTotalAmount() {
  const cartItems = useAppSelector(selectCart)
  let totalPrice = 0

  cartItems?.forEach(i => {
    totalPrice += i.total
  })

  return { totalPrice }
}
