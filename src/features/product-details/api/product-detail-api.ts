import { axios } from 'axios/axiosInstance'
import { Product, Response } from 'shared/types/shared-types'
import { PRODUCT_DETAIL_API_CONSTANTS } from '../constants/product-detail-constants'

export const getProductDetail = async (id: string): Promise<Response<Product>> => {
  try {
    const response = await axios({
      url: PRODUCT_DETAIL_API_CONSTANTS.getDetail.replace(':id', id),
      method: 'get'
    })
    return response.data
  } catch (error: any) {
    throw new Error(error)
  }
}
