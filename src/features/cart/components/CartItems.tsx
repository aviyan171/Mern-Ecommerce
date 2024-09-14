import { BsChevronLeft, BsChevronRight, BsXLg } from 'react-icons/bs'
import { useAppDispatch } from 'shared/store/hooks'
import { decreaseProduct, increaseProduct, removeCart } from '../store/CartSlice'
import { toast } from 'react-toastify'
import { TOAST_MESSAGE } from '../constants/cart-constants'

type Props = {
  image: string
  price: number
  name: string
  productId: string
  quantity: number
  total: number
  stock: number
}
const CartItems = ({ image, price, name, productId, quantity, total, stock }: Props) => {
  const dispatch = useAppDispatch()

  const handleIncrease = () => {
    if (quantity >= stock) {
      toast.error(TOAST_MESSAGE.quantityGreaterThanStock)
      return
    }
    dispatch(increaseProduct({ productId }))
  }
  const handleDecrease = () => {
    dispatch(decreaseProduct({ productId }))
  }

  const handleRemove = () => {
    dispatch(removeCart({ productId }))
  }

  return (
    <div className="py-7 border-[1px] border-y-slate-300 border-x-0 flex items-center justify-between">
      <div className="w-60">
        <div className="flex gap-7 items-center">
          <div className="max-w-[90px]">
            <img src={image} alt="images" className="w-full" />
          </div>
          <div>
            <p className="font-medium mb-2">{name}</p>
            <p className="font-bold">$ {price}</p>
          </div>
        </div>
      </div>
      <div className="mr-25">
        <div className="flex items-center gap-5">
          <BsChevronLeft cursor="pointer" onClick={handleDecrease} />
          {quantity}
          <BsChevronRight cursor="pointer" onClick={handleIncrease} />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="font-bold"> $ {total}</div>
        <div
          className="h-[40px] w-[40px] bg-alabaster rounded-full flex justify-center items-center cursor-pointer "
          onClick={handleRemove}
        >
          <BsXLg />
        </div>
      </div>
    </div>
  )
}

export default CartItems
