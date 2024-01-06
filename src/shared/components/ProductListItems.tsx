import { BsArrowLeftRight, BsHeart, BsSearch } from 'react-icons/bs';
import banner3 from '../../shared/assets/jpg/banner-3.jpg';
function ProductListItems() {
  return (
    <div className="group">
      <div
        className="h-[256px] bg-no-repeat bg-cover relative  "
        style={{ backgroundImage: `url(${banner3})` }}
      >
        <div className="absolute px-4 py-1 bg-black  text-white text-xs top-5 left-0">
          SALE
        </div>
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
          <div className="bg-white p-2">
            <BsArrowLeftRight />
          </div>
          <div className="bg-white p-2">
            <BsSearch />
          </div>
        </div>
      </div>
      <div className="mt-[25px] flex flex-col gap-1">
        <p>Piqué Biker Jacket</p>
        <p className="group-hover:text-red-500 cursor-pointer transition-all">
          + Add To Cart
        </p>
        <p className="text-lg font-bold">$67.24</p>
      </div>
    </div>
  );
}

export default ProductListItems;
