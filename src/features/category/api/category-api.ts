import { axios } from 'axios/axiosInstance'
import { CATEGORY_API_ROUTE } from '../constants/category-constants'
import { Product, Response } from 'shared/types/shared-types'
import { CategoryFilter } from '../types/category-types'

export const getFilteredCategoryProducts = async (
  params: CategoryFilter
): Promise<
  Response<{
    totalPage: number
    rows: Product[]
    count: number
  }>
> => {
  try {
    const response = await axios({
      url: CATEGORY_API_ROUTE,
      method: 'get',
      params
    })
    return response.data
  } catch (error: any) {
    throw new Error(error)
  }
}
