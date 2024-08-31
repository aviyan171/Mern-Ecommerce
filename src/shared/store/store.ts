import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from 'features/auth/login/auth-store/user-slice'
import { cartSlice } from 'features/cart/store/CartSlice'
import { productCategoryFilterSlice } from 'features/category/store/ProductCategoryFilterSlice'

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [productCategoryFilterSlice.name]: productCategoryFilterSlice.reducer,
    [cartSlice.name]: cartSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
