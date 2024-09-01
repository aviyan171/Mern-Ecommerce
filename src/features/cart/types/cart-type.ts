import { ESTATUS } from '../enum/cart-enum'

export type CartItems = {
  name: string
  photo: string
  price: {
    dollarAppendedPrice: string
    originalPrice: number
  }
  quantity: number
  productId: string
  total: number
}
export type ShippingInfo = {
  address: string
  city: string
  state: string
  country: string
  pinCode: number
}

export type OrderTRquestBody = {
  shippingInfo: ShippingInfo
  user: string
  subtotal: number
  tax: number
  shippingCharges: number
  discount: number
  total: number
  orderItems: CartItems[]
  status?: ESTATUS
}

export type Order = OrderTRquestBody & {
  createdAt: Date
  updatedAt: Date
}

export type Coupon = {
  code: string
  amount: string
}
