import { BsHeart } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { UI_ROUTES } from 'shared/constants'

export type ProductProps = {
  image: string
  name: string
  price: string
  productId: string
}

function ProductListItems({ image, name, price, productId }: ProductProps) {
  const navigate = useNavigate()

  const handleOnClick = () => {
    navigate(`${UI_ROUTES.productDetails}?id=${productId}`)
  }

  return (
    <div className="group cursor-pointer" onClick={handleOnClick}>
      <div className="h-[256px] bg-no-repeat bg-contain relative" style={{ backgroundImage: `url(${image})` }}>
        <div className="absolute px-4 py-1 bg-black  text-white text-xs top-5 left-0">SALE</div>
        <div
          className="absolute 
                 flex flex-col gap-3
                top-5 right-0 group-hover:right-6
                invisible group-hover:visible  
                 transition-[right] duration-700 ease-in-out  "
        >
          <div className="bg-white p-2">
            <BsHeart />
          </div>
          {/* <div className="bg-white p-2">
            <BsArrowLeftRight />
          </div>
          <div className="bg-white p-2">
            <BsSearch />
          </div> */}
        </div>
      </div>
      <div className="mt-[25px] flex flex-col gap-1">
        <p>{name}</p>
        <p className="group-hover:text-red-500 cursor-pointer transition-all">+ Add To Cart</p>
        <p className="text-lg font-bold">{price}</p>
      </div>
    </div>
  )
}

export default ProductListItems
