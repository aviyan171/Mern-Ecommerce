import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CartItems } from '../types/cart-type'
import { RootState } from 'shared/store/store'

type initialState = {
  cartItems: CartItems[] | null
}

const initialState: initialState = {
  cartItems: null
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<CartItems>) => {
      const handleCartItem = () => {
        if (action.payload) {
          return [...(state?.cartItems || []), action.payload]
        }
        return []
      }
      state.cartItems = handleCartItem()
    },
    increaseProduct: (state, action: PayloadAction<{ productId: string }>) => {
      const matchedProduct = state.cartItems?.find(i => i.productId === action.payload.productId)
      if (!matchedProduct) return
      matchedProduct.quantity += 1
      matchedProduct.total = matchedProduct.quantity * matchedProduct.price.originalPrice
    },
    decreaseProduct: (state, action: PayloadAction<{ productId: string }>) => {
      const matchedProduct = state.cartItems?.find(i => i.productId === action.payload.productId)
      if (!matchedProduct) return
      matchedProduct.quantity -= 1
      matchedProduct.total = matchedProduct.quantity * matchedProduct.price.originalPrice
    },
    removeCart: (state, action: PayloadAction<{ productId: string }>) => {
      if (!state.cartItems) return
      const matchedProduct = state.cartItems.findIndex(i => i.productId === action.payload.productId)
      state.cartItems.splice(matchedProduct, 1)
      state.cartItems = state.cartItems
    },

    removeAllCartItems: state => {
      state.cartItems = null
    }
  }
})

export const { removeAllCartItems, setCart, increaseProduct, decreaseProduct, removeCart } = cartSlice.actions
export const selectCart = (state: RootState) => state.cart.cartItems
