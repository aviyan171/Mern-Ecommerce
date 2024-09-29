import { TOAST_MESSAGE } from 'features/cart/constants/cart-constants'
import { increaseProduct, selectCart, setCart } from 'features/cart/store/CartSlice'
import { useState } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Button from 'shared/components/Button'
import { useAppDispatch, useAppSelector } from 'shared/store/hooks'
import { removeDollarSign } from 'shared/utils'
import { PRODUCT_DETAIL_TOAST_MESSAGE } from '../constants/product-detail-constants'

const SelectQuantityBox = ({ stock, name, image, price }: { stock: number; name: string; image: string; price: string }) => {
  const [searchParams] = useSearchParams()
  const dispatch = useAppDispatch()

  const productId = searchParams.get('id') ?? ''

  const cartProduct = useAppSelector(selectCart)?.find(item => item.productId === productId)

  const cartQuantity = cartProduct?.quantity || 0

  const [quantity, setQuantity] = useState(1)

  const totalQuantityFromCartAndInput = cartQuantity + quantity

  const handleQuantityChange = (value: string) => {
    const convertedValue = Number(value)
    if (convertedValue || value === '') {
      setQuantity(convertedValue)
    }
    return
  }

  const handleIncrease = () => {
    setQuantity(quantity + 1)
  }
  const handleDecrease = () => {
    if (quantity < 1) return
    setQuantity(quantity - 1)
  }

  const handleAddToCart = () => {
    if (quantity === 0) return toast.error(PRODUCT_DETAIL_TOAST_MESSAGE.quantityCannotBeZero)
    if (totalQuantityFromCartAndInput > stock) return toast.error(TOAST_MESSAGE.quantityGreaterThanStock)

    if (cartProduct) {
      dispatch(
        increaseProduct({
          productId,
          quantity
        })
      )
      toast.success(PRODUCT_DETAIL_TOAST_MESSAGE.productAddedToCart)

      return
    }

    dispatch(
      setCart({
        name,
        photo: image,
        price: {
          dollarAppendedPrice: price,
          originalPrice: removeDollarSign(price)
        },
        productId,
        quantity,
        total: removeDollarSign(price) * quantity,
        stock
      })
    )
    toast.success(PRODUCT_DETAIL_TOAST_MESSAGE.productAddedToCart)
  }

  return (
    <div>
      <div className="flex flex-col gap-3">
        {!!cartQuantity && <p> Product quantity already in cart : {cartQuantity}</p>}
        <p className="text-center mb-3">Available stock : {stock - cartQuantity}</p>
      </div>
      <div className="flex gap-5 items-center">
        <div className="border-[1px] border-black h-[40px] w-[100px] px-5 relative">
          <input
            type="text"
            className="w-[100%] h-[100%] focus:outline-none"
            value={quantity}
            onChange={e => handleQuantityChange(e.target.value)}
          />
          <div className="absolute right-2 top-1 cursor-pointer" onClick={handleIncrease}>
            <BsChevronUp />
          </div>
          <div className="absolute right-2 bottom-[1px] cursor-pointer" onClick={handleDecrease}>
            <BsChevronDown />
          </div>
        </div>
        <Button text="Add to cart" onClick={handleAddToCart} disabled={!stock} />
      </div>
    </div>
  )
}

export default SelectQuantityBox
