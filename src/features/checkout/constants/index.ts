import { ICheckoutForm } from '../interface'

export const checkoutDefaultValues: ICheckoutForm = {
  firstName: '',
  lastName: '',
  country: '',
  address: '',
  city: '',
  state: '',
  pinCode: '',
  phone: '',
  email: '',
  orderNotes: '',
  createAccount: false,
  accountPassword: ''
}

export const CHECKOUT_API_ROUTE = {
  create: '/order/new'
}
