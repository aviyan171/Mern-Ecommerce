import { useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { BsPencil } from 'react-icons/bs';
import emptyImage from '../../../../shared/assets/svg/emtyimage.svg';

export function AddProductImage() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const { setValue } = useFormContext();
  const onImageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileInfo = e.target.files?.[0];
    const imageUrl = URL.createObjectURL(fileInfo!);
    if (imageUrl && imageRef.current) {
      imageRef.current.src = imageUrl;
      setValue('productImage', imageUrl);
    }
  };

  return (
    <div>
      <div className="bg-white  rounded-sm shadow-lg p-9 ">
        <p className="font-bold">Thumbnail</p>
        <div className="flex justify-center mt-4 ">
          <div className="h-[150px] w-[150px]  rounded-sm shadow-lg relative">
            <img
              src={imageRef.current?.src || emptyImage}
              alt="emptyImage"
              className="w-full h-full "
              ref={imageRef}
            />
            <div
              className="rounded-full shadow-lg h-7 w-7 cursor-pointer bg-alabaster absolute p-[7px] right-[-10px] top-0"
              onClick={() => inputRef.current?.click()}
            >
              <BsPencil />
            </div>
          </div>
        </div>
        <div className="text-center text-xs mt-3">
          Set the product thumbnail image. Only *.png, *.jpg and *.jpeg image
          files are accepted
        </div>
        <input
          type="file"
          accept="image/png, image/jpeg, image/svg"
          className="hidden"
          ref={inputRef}
          onChange={(e) => onImageInputChange(e)}
        />
      </div>
    </div>
  );
}
