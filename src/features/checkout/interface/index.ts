import { ESTATUS } from 'features/cart/enum/cart-enum'

export interface ICheckoutForm {
  firstName: string
  lastName: string
  country: string
  address: string
  city: string
  state: string
  pinCode: string
  phone: string
  email: string
  orderNotes: string
  createAccount: boolean
  accountPassword: string
}

export type OrderItem = {
  name: string
  photo: string
  price: number
  quantity: number
  productId: string
}

export type ShippingInfo = {
  address: string
  city: string
  state: string
  country: string
  pinCode: number
  email: string
  phoneNo: number
}

export type OrderRequestBody = {
  shippingInfo: ShippingInfo
  user: string
  subtotal: number
  tax: number
  shippingCharges: number
  discount: number
  total: number
  orderItems: OrderItem[]
  status?: ESTATUS
}
