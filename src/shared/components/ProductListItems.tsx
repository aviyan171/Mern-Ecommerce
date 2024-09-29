import { selectCart, setCart } from 'features/cart/store/CartSlice'
import { BsHeart } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { UI_ROUTES } from 'shared/constants'
import { useAppDispatch, useAppSelector } from 'shared/store/hooks'
import { removeDollarSign } from 'shared/utils'

export type ProductProps = {
  image: string
  name: string
  price: string
  productId: string
  stock: number
}

function ProductListItems({ image, name, price, productId, stock }: ProductProps) {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector(selectCart)

  const handleOnClick = () => {
    navigate(`${UI_ROUTES.productDetails}?id=${productId}`)
  }

  const isProductAlreadyExistsInCart = () => {
    return cartItems?.find(i => i.productId === productId)
  }

  const handleAddToCart = () => {
    if (isProductAlreadyExistsInCart() || !stock) return
    dispatch(
      setCart({
        name,
        photo: image,
        price: {
          dollarAppendedPrice: price,
          originalPrice: removeDollarSign(price)
        },
        productId,
        quantity: 1,
        total: removeDollarSign(price),
        stock
      })
    )
  }

  const handleHover = () => {
    if (isProductAlreadyExistsInCart()) {
      return 'group-hover:text-green-500 cursor-default'
    }
    return 'group-hover:text-red-500 cursor-pointer'
  }

  const handleCartTitle = () => {
    if (!stock) return '❌ Out of Stock'
    if (isProductAlreadyExistsInCart()) {
      return ' ✅ Added to Cart'
    }
    return '+ Add To Cart'
  }

  return (
    <div className="group ">
      <div className="relative">
        <img className="h-[256px] object-fill  cursor-pointer w-full" src={image} onClick={handleOnClick} />
        <div className="absolute px-4 py-1 bg-black  text-white text-xs top-5 left-0">SALE</div>
        <div
          className="absolute 
                 flex flex-col gap-3
                top-5 right-0 group-hover:right-6
                invisible group-hover:visible  
                 transition-[right] duration-700 ease-in-out cursor-pointer "
        >
          <div className="bg-white p-2">
            <BsHeart />
          </div>
        </div>
      </div>

      <div className="mt-[25px] flex flex-col gap-1">
        <p>{name}</p>
        <p className={handleHover()} onClick={handleAddToCart}>
          {handleCartTitle()}
        </p>
        <p className="text-lg font-bold">{price}</p>
      </div>
    </div>
  )
}

export default ProductListItems
