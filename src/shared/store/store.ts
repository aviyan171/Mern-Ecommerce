import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from 'features/auth/login/auth-store/user-slice'
import { cartSlice } from 'features/cart/store/CartSlice'
import { productCategoryFilterSlice } from 'features/category/store/ProductCategoryFilterSlice'
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore'
import storage from 'redux-persist/lib/storage/session'
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage
}
const persistedReducer = persistReducer(persistConfig, cartSlice.reducer)

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [productCategoryFilterSlice.name]: productCategoryFilterSlice.reducer,
    [cartSlice.name]: persistedReducer
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REGISTER, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE]
      }
    })
  }
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
