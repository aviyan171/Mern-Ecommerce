import { axios } from 'axios/axiosInstance'
import { Response } from 'shared/types/shared-types'
import { CHECKOUT_API_ROUTE } from '../constants'
import { OrderRequestBody } from '../interface'

export const createOrder = async (data: OrderRequestBody): Promise<Response<void>> => {
  try {
    const response = await axios({
      method: 'post',
      url: CHECKOUT_API_ROUTE.create,
      data
    })
    return response.data
  } catch (error) {
    throw new Error(error as any)
  }
}
