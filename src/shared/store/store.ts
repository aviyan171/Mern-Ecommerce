import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from 'features/auth/login/auth-store/user-slice'
import { productCategoryFilterSlice } from 'features/category/store/ProductCategoryFilterSlice'

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [productCategoryFilterSlice.name]: productCategoryFilterSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
