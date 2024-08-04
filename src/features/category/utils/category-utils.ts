import { AdaptedProduct, Product, Response } from 'shared/types/shared-types'

export const adaptCategoryProduct = (
  data: Response<{
    totalPage: number
    rows: Product[]
    count: number
  }>
): Response<{
  totalPage: number
  rows: AdaptedProduct[]
  count: number
}> => {
  const { VITE_API_URL } = import.meta.env
  return {
    ...data,
    data: {
      ...data.data,
      rows: data.data?.rows?.map(i => ({
        ...i,
        price: `$ ${i.price}`,
        photo: i.photo.map(photo => `${VITE_API_URL}${photo}`.replace(/\\/g, '/'))
      }))
    }
  }
}
