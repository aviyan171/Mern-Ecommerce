import { BsChevronLeft, BsChevronRight, BsXLg } from 'react-icons/bs';
import img from '../../../shared/assets/jpg/banner-1.jpg';

const CartItems = () => {
  return (
    <div className="py-7 border-[1px] border-y-slate-300 border-x-0 flex items-center justify-between">
      <div className="flex gap-7 items-center">
        <div className="max-w-[90px]">
          <img src={img} alt="images" className="w-full" />
        </div>
        <div>
          <p className="font-medium mb-2">T-shirt Contrast Pocket</p>
          <p className="font-bold">$98.49</p>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-5">
          <BsChevronLeft />
          1
          <BsChevronRight />
        </div>
      </div>
      <div className="font-bold"> $ 30.00</div>
      <div className="h-[40px] w-[40px] bg-alabaster rounded-full flex justify-center items-center cursor-pointer  ">
        <BsXLg />
      </div>
    </div>
  );
};

export default CartItems;
