import { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import Button from 'shared/components/Button';

const SelectQuantityBox = () => {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (value: string) => {
    const convertedValue = Number(value);
    if (convertedValue || value === '') {
      setQuantity(convertedValue);
    }
    return;
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrease = () => {
    if (quantity < 1) return;
    setQuantity(quantity - 1);
  };
  return (
    <div className="flex gap-5 items-center">
      <div className="border-[1px] border-black h-[40px] w-[100px] px-5 relative">
        <input
          type="text"
          className="w-[100%] h-[100%] focus:outline-none"
          value={quantity}
          onChange={(e) => handleQuantityChange(e.target.value)}
        />
        <div
          className="absolute right-2 top-1 cursor-pointer"
          onClick={handleIncrease}
        >
          <BsChevronUp />
        </div>
        <div
          className="absolute right-2 bottom-[1px] cursor-pointer"
          onClick={handleDecrease}
        >
          <BsChevronDown />
        </div>
      </div>
      <Button text="Add to cart" onClick={() => ''} />
    </div>
  );
};

export default SelectQuantityBox;
