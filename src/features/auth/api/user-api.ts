import { axios } from 'axios/axiosInstance'
import { USER_API_CONSTANTS } from '../constants/user-constants'
import { Response } from 'shared/types/shared-types'
import { AuthUser } from '../login/interface'

export const getUserById = async (id: string): Promise<Response<AuthUser>> => {
  try {
    const response = await axios({
      method: 'get',
      url: USER_API_CONSTANTS.get.replace(':id', id)
    })
    return response.data
  } catch (error) {
    throw new Error(error as any)
  }
}
