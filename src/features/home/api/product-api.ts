import { axios } from 'axios/axiosInstance'
import { Response } from 'shared/types/shared-types'
import { Product } from '../types/produt-type'
import { PRODUCT_API_CONSTANTS } from '../constants/product-constants'

export const getLatestProducts = async (): Promise<Response<Product[]>> => {
  try {
    const response = await axios({
      method: 'get',
      url: PRODUCT_API_CONSTANTS.getLatestProduct
    })

    return response.data
  } catch (error) {
    throw new Error(error as any)
  }
}
