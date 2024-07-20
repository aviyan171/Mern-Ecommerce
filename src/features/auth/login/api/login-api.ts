import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { firebaseAuth } from '../firebase/firebase'
import { axios } from 'axios/axiosInstance'
import { API_CONSTANTS } from '../constants'
import { Gender, UserRequestBody } from '../interface'
import { Response } from 'shared/types/shared-types'
import { ROLE } from '../enum/login-enum'

export const handleLogin = async (data: UserRequestBody): Promise<Response<any>> => {
  try {
    const response = await axios({
      method: 'post',
      url: API_CONSTANTS.create,
      data
    })
    return response.data
  } catch (error) {
    throw new Error(error as any)
  }
}

export const handleGoogleSignIn = async ({ dob, gender }: { dob: Date; gender: Gender }) => {
  const provider = new GoogleAuthProvider()
  try {
    const result = await signInWithPopup(firebaseAuth, provider)
    const user = result.user
    if (user) {
      await handleLogin({
        name: user.displayName!,
        _id: user.uid,
        gender,
        role: ROLE.USER,
        dob,
        email: user.email!,
        photo: user.photoURL!
      })
    }
    return user
  } catch (error) {
    throw new Error(error as any)
  }
}
