import { useState } from 'react';
import bigImg1 from '../../../shared/assets/png/product-big-2.png';
import bigImg2 from '../../../shared/assets/png/product-big-3.png';
import bigImg3 from '../../../shared/assets/png/product-big-4.png';
import bigImg4 from '../../../shared/assets/png/product-big-5.png';

import thum1 from '../../../shared/assets/png/thumb-1.png';
import thum2 from '../../../shared/assets/png/thumb-2.png';
import thum3 from '../../../shared/assets/png/thumb-3.png';
import thum4 from '../../../shared/assets/png/thumb-4.png';
import { IProductDetailImage } from '../interface';
import CurrentImages from './CurrentImages';
import DisplayedImage from './DisplayedImage';

function ProductImages() {
  const imagesList: IProductDetailImage[] = [
    {
      smallImage: thum1,
      bigImage: bigImg1,
    },
    {
      smallImage: thum2,
      bigImage: bigImg2,
    },
    {
      smallImage: thum3,
      bigImage: bigImg3,
    },
    {
      smallImage: thum4,
      bigImage: bigImg4,
    },
  ];

  const [currentImage, setCurrentImage] = useState(imagesList[0].bigImage);

  const handleCurrentImage = (currentImage: string) => {
    setCurrentImage(currentImage);
  };

  return (
    <div>
      <div className="flex gap-100 mt-10">
        <div className="flex flex-col gap-4">
          {imagesList.map((img) => {
            return (
              <CurrentImages
                src={img}
                key={img.smallImage}
                onClick={handleCurrentImage}
              />
            );
          })}
        </div>
        <DisplayedImage src={currentImage} />
      </div>
    </div>
  );
}

export default ProductImages;
