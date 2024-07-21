import { Gender, ROLE } from '../enum/login-enum'

export interface IRegisterForm {
  firstName: string
  lastName: string
  country: string
  city: string
  state: string
  zip: string
  phone: string
  email: string
}

export interface ILoginForm {
  gender: Gender | null
  dob: Date | null
}

export type UserRequestBody = {
  name: string
  email: string
  photo: string
  gender: Gender
  _id: string
  dob: Date
  role: ROLE
}

export type AuthUser = UserRequestBody
