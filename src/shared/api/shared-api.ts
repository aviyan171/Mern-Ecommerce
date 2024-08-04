import { axios } from 'axios/axiosInstance'
import { SHARED_API_ROUTES } from 'shared/constants'
import { Response } from 'shared/types/shared-types'

export const getAllCategories = async (): Promise<Response<string[]>> => {
  try {
    const response = await axios({
      url: SHARED_API_ROUTES.getAllCategories,
      method: 'get'
    })
    return response.data
  } catch (err: any) {
    throw new Error(err)
  }
}
