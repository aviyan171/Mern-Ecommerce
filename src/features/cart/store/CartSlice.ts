import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CartItems } from '../types/cart-type'
import { RootState } from 'shared/store/store'

type initialState = {
  cartItems: CartItems[] | null
  discountDetail: {
    discountAmount: number
    couponName: string
  }
}

const initialState: initialState = {
  cartItems: null,
  discountDetail: {
    couponName: '',
    discountAmount: 0
  }
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
    increaseProduct: (state, action: PayloadAction<{ productId: string; quantity?: number }>) => {
      const matchedProduct = state.cartItems?.find(i => i.productId === action.payload.productId)
      if (!matchedProduct) return
      matchedProduct.quantity += action.payload.quantity || 1
      matchedProduct.total = matchedProduct.quantity * matchedProduct.price.originalPrice
    },
    decreaseProduct: (state, action: PayloadAction<{ productId: string }>) => {
      if (!state.cartItems) return
      const matchedProduct = state.cartItems?.find(i => i.productId === action.payload.productId)
      if (!matchedProduct) return
      matchedProduct.quantity -= 1
      matchedProduct.total = matchedProduct.quantity * matchedProduct.price.originalPrice
      if (matchedProduct.quantity === 0) {
        state.discountDetail = {
          couponName: '',
          discountAmount: 0
        }
        const matchedProductIndex = state.cartItems.indexOf(matchedProduct)
        state.cartItems.splice(matchedProductIndex, 1)
        state.cartItems = state.cartItems
      }
    },
    removeCart: (state, action: PayloadAction<{ productId: string }>) => {
      if (!state.cartItems) return

      if (state.cartItems.length === 1) {
        state.discountDetail = {
          couponName: '',
          discountAmount: 0
        }
      }
      const matchedProduct = state.cartItems.findIndex(i => i.productId === action.payload.productId)
      state.cartItems.splice(matchedProduct, 1)
      state.cartItems = state.cartItems
    },

    removeAllCartItems: state => {
      state.cartItems = null
      state.discountDetail = {
        couponName: '',
        discountAmount: 0
      }
    },
    setDiscountedAmount: (state, action: PayloadAction<typeof initialState.discountDetail>) => {
      state.discountDetail = {
        ...action.payload
      }
    }
  }
})

export const { removeAllCartItems, setCart, increaseProduct, decreaseProduct, removeCart, setDiscountedAmount } = cartSlice.actions
export const selectCart = (state: RootState) => state.cart.cartItems
export const selectDiscountedDetail = (state: RootState) => state.cart.discountDetail
