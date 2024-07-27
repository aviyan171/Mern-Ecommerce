import { Dispatch } from '@reduxjs/toolkit'
import { User } from 'firebase/auth'
import { setUser } from '../login/auth-store/user-slice'
import { Gender, ROLE } from '../login/enum/login-enum'
import { UserRequestBody } from '../login/interface'

export const setAuthState = ({
  dispatch,
  user,
  dob,
  gender
}: {
  dispatch: Dispatch
  user: User | UserRequestBody
  dob?: Date
  gender?: Gender
}) => {
  if (user) {
    dispatch(
      setUser({
        _id: (user as User)?.uid || (user as UserRequestBody)?._id || '',
        dob: (user as UserRequestBody)?.dob || dob || '',
        gender: (user as UserRequestBody)?.gender || gender || '',
        email: user?.email || '',
        name: (user as User)?.displayName || (user as UserRequestBody)?.name || '',
        role: (user as UserRequestBody).role || ROLE.USER,
        photo: (user as User)?.photoURL || (user as UserRequestBody)?.photo || ''
      })
    )
  }
}
