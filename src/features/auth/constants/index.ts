import { ILoginForm, IRegisterForm } from '../interface';

export const registerDefaultValues: IRegisterForm = {
  city: '',
  country: '',
  email: '',
  firstName: '',
  lastName: '',
  phone: '',
  state: '',
  zip: '',
};

export const loginDefaultValues: ILoginForm = {
  email: '',
  password: '',
};
