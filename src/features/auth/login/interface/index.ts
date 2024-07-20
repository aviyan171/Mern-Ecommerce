import { ROLE } from '../enum/login-enum'

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
  email: string
  password: string
}

export type UserRequestBody = {
  name: string
  email: string
  photo: string
  gender: Gender
  _id: string
  dob: string
  role: ROLE
}

export enum Gender {
  MALE = 'male',
  FEMALE = 'female'
}
