import { AdaptedProduct, Product, Response } from 'shared/types/shared-types'

export const adaptProductDetailList = (data: Response<Product>): Response<AdaptedProduct> => {
  const { VITE_API_URL } = import.meta.env
  return {
    ...data,
    data: {
      ...data.data,
      photo: data.data.photo.map(photo => `${VITE_API_URL}${photo}`.replace(/\\/g, '/')),
      price: `$ ${data.data.price}`
    }
  }
}
