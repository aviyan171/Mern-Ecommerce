import { useMutation } from '@tanstack/react-query'
import { handleGoogleSignIn } from '../api/login-api'

import { toast } from 'react-toastify'
import { Login_MESSAGES } from '../constants'
import { Gender } from '../enum/login-enum'

export const useLoginWithGoogleMutation = () => {
  const mutation = useMutation({
    mutationFn: ({ gender, dob }: { gender: Gender; dob: Date }) => handleGoogleSignIn({ dob, gender }),
    onSuccess: async res => {
      toast(Login_MESSAGES.SUCCESS.replace('{name}', res?.displayName || ''), { type: 'success' })
    },
    onError: err => {
      toast(err.message, { type: 'error' })
    }
  })
  return mutation
}
