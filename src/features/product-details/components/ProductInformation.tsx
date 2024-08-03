import AdditionalInformation from './AdditionalInformation'
import SelectQuantityBox from './SelectQuantityBox'

type Props = {
  price: string
  name: string
  description: string
}

function ProductInformation({ price, name, description }: Props) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center">
        <p className="font-bold text-2xl mb-3 ">{name}</p>
        <p className=" text-2xl font-bold mb-4">
          {price}
          {/* <span className="text-base text-slate-400 font-normal ml-2">
            <span className="relative">
              40.00
              <span className="border-[1px] border-slate-500 border-b-2 w-12 absolute bottom-[10px] right-[1px]" />
            </span>
          </span> */}
        </p>
        <p className="text-balance text-center mb-9">{description}</p>
        {/* <div className="flex gap-3 items-center mb-9">
          <p>Size : </p>
          <div>
            <SelectSize handleSetSize={handleSetSize} selectedSize={size} />
          </div>
        </div> */}
        <div>
          <SelectQuantityBox />
        </div>
        <div className="mt-15 w-full">
          <AdditionalInformation description={description} />
        </div>
      </div>
    </div>
  )
}

export default ProductInformation
