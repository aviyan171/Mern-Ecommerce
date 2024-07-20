import { ILoginForm, IRegisterForm } from '../interface'

export const registerDefaultValues: IRegisterForm = {
  city: '',
  country: '',
  email: '',
  firstName: '',
  lastName: '',
  phone: '',
  state: '',
  zip: ''
}

export const loginDefaultValues: ILoginForm = {
  email: '',
  password: ''
}

export const Login_MESSAGES = {
  SUCCESS: 'Successfully Logged in !! Welcome {name}',
  ERROR: 'Error when logged in'
}

export const API_CONSTANTS = {
  create: '/user/new'
}
