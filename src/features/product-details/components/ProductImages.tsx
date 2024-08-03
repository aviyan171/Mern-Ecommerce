import { useState } from 'react'

import CurrentImages from './CurrentImages'
import DisplayedImage from './DisplayedImage'

function ProductImages({ images }: { images: string[] }) {
  const [currentImage, setCurrentImage] = useState(images[0])

  const handleCurrentImage = (currentImage: string) => {
    setCurrentImage(currentImage)
  }

  return (
    <div>
      <div className="flex gap-100 mt-10">
        <div className="flex flex-col gap-4  ">
          {images.map(img => {
            return <CurrentImages src={img} key={img} onClick={handleCurrentImage} />
          })}
        </div>
        <DisplayedImage src={currentImage || images[0]} />
      </div>
    </div>
  )
}

export default ProductImages
