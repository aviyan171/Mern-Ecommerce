import { IProductDetailImage } from '../interface';

interface IProps {
  src: IProductDetailImage;
  onClick: (currentImage: string) => void;
}
function CurrentImages({ src, onClick }: IProps) {
  return (
    <div>
      <div
        className="h-[120px] w-[95px] cursor-pointer"
        onClick={() => onClick(src.bigImage)}
      >
        <img src={src.smallImage} alt="img" className="w-full" />
      </div>
    </div>
  );
}

export default CurrentImages;
