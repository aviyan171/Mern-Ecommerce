interface IProps {
  i: string;
  handleSetSize: (value: string) => void;
  isSelected: boolean;
}
function SelectSize({ i, handleSetSize, isSelected }: IProps) {
  return (
    <div
      className={`border-[1px] border-black py-[6px] px-[15px] cursor-pointer ${
        isSelected ? 'bg-black' : 'bg-white'
      }`}
      key={i}
      onClick={() => handleSetSize(i)}
    >
      <p className={`font-bold ${isSelected ? 'text-white' : 'text-base'}`}>
        {i}
      </p>
    </div>
  );
}

export default SelectSize;
