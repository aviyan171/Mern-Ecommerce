import { axios } from 'axios/axiosInstance'
import { CART_API_CONSTANTS } from '../constants/cart-constants'
import { Response } from 'shared/types/shared-types'

export const applyDiscount = async (body: { code: string }): Promise<Response<{ discount: number }>> => {
  try {
    const response = await axios({
      url: CART_API_CONSTANTS.applyDiscount,
      method: 'get',
      params: body
    })
    return response.data
  } catch (error: any) {
    throw new Error(error)
  }
}
