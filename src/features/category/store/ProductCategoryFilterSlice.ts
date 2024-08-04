import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CategoryFilter } from '../types/category-types'
import { RootState } from 'shared/store/store'

type initialState = {
  filter: CategoryFilter
}

const initialState: initialState = {
  filter: {
    category: '',
    keyword: '',
    page: 1,
    sort: 'latest'
  }
}

export const productCategoryFilterSlice = createSlice({
  name: 'productCategoryFilter',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<CategoryFilter>) => {
      state.filter = { ...state.filter, ...action.payload }
    },
    resetFilter: state => {
      state.filter = initialState.filter
    }
  }
})

export const { setFilter, resetFilter } = productCategoryFilterSlice.actions
export const selectFilter = (state: RootState) => state.productCategoryFilter.filter
