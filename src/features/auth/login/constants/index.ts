import { Gender } from '../enum/login-enum'
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
  gender: Gender.FEMALE,
  dob: new Date()
}

export const Login_MESSAGES = {
  SUCCESS: 'Successfully Logged in !! Welcome {name}',
  ERROR: 'Error when logged in'
}

export const API_CONSTANTS = {
  create: '/user/new'
}

export const GENDER_SELECT = [
  {
    label: 'Male',
    value: Gender.MALE
  },
  {
    label: 'Female',
    value: Gender.FEMALE
  }
]
