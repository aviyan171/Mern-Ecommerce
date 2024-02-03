import { useState } from 'react';
import AdditionalInformation from './AdditionalInformation';
import SelectQuantityBox from './SelectQuantityBox';
import SelectSize from './SelectSize';

function ProductInformation() {
  const [size, setSize] = useState('XXL');

  const sizes = ['XXL', 'XL', 'L', 'S'];

  const handleSetSize = (value: string) => {
    setSize(value);
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center">
        <p className="font-bold text-2xl mb-3 ">Hooded thermal anorak</p>
        <p className=" text-2xl font-bold mb-4">
          $ 270.00{' '}
          <span className="text-base text-slate-400 font-normal ml-2">
            <span className="relative">
              40.00
              <span className="border-[1px] border-slate-500 border-b-2 w-12 absolute bottom-[10px] right-[1px]" />
            </span>
          </span>
        </p>
        <p className="text-balance text-center mb-9">
          Coat with quilted lining and an adjustable hood. Featuring long
          sleeves with adjustable cuff tabs, adjustable asymmetric hem with
          elastic side tabs and a front zip fastening with placket.
        </p>
        <div className="flex gap-3 items-center mb-9">
          <p>Size : </p>
          <div className="flex gap-2">
            {sizes.map((i) => {
              return (
                <SelectSize
                  i={i}
                  handleSetSize={handleSetSize}
                  isSelected={size === i}
                  key={i}
                />
              );
            })}
          </div>
        </div>
        <div>
          <SelectQuantityBox />
        </div>
        <div className="mt-15 w-full">
          <AdditionalInformation />
        </div>
      </div>
    </div>
  );
}

export default ProductInformation;
