import { sizes } from 'shared/constants';

interface IProps {
  handleSetSize: (value: string) => void;
  selectedSize?: string;
}
function SelectSize({ handleSetSize, selectedSize = '' }: IProps) {
  return (
    <div className="flex gap-2">
      {sizes.map((i) => {
        return (
          <div
            className={`border-[1px] border-black py-[6px] px-[15px] cursor-pointer ${
              selectedSize === i ? 'bg-black' : 'bg-white'
            }`}
            key={i}
            onClick={() => handleSetSize(i)}
          >
            <p
              className={`font-bold ${
                selectedSize === i ? 'text-white' : 'text-base'
              }`}
            >
              {i}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default SelectSize;
