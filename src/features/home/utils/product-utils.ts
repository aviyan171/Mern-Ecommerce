import { AdaptedProduct, Product, Response } from 'shared/types/shared-types'

export const adaptProductList = (data: Response<Product[]>): Response<AdaptedProduct[]> => {
  const { VITE_API_URL } = import.meta.env
  return {
    ...data,
    data: data?.data?.map(i => ({
      ...i,
      photo: i.photo.map(photo => `${VITE_API_URL}${photo}`.replace(/\\/g, '/')),
      price: `$ ${i.price}`
    }))
  }
}
