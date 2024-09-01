import { useAppSelector } from 'shared/store/hooks'
import CartItems from './CartItems'
import { selectCart } from '../store/CartSlice'

function CartItemLists() {
  const cartItems = useAppSelector(selectCart) || []
  return cartItems.map(i => (
    <CartItems
      image={i.photo}
      name={i.name}
      price={i.price.originalPrice}
      productId={i.productId}
      quantity={i.quantity}
      total={i.total}
      key={i.productId}
    />
  ))
}

export default CartItemLists
