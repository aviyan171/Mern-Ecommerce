import { useMutation } from '@tanstack/react-query'
import { handleGoogleSignIn } from '../api/login-api'
import { useNavigate } from 'react-router-dom'
import { UI_ROUTES } from 'shared/constants'
import { toast } from 'react-toastify'
import { Login_MESSAGES } from '../constants'
import { Gender } from '../interface'

export const useLoginWithGoogleMutation = () => {
  const navigate = useNavigate()
  const mutation = useMutation({
    mutationFn: ({ gender, dob }: { gender: Gender; dob: Date }) => handleGoogleSignIn({ dob, gender }),
    onSuccess: async res => {
      navigate(UI_ROUTES.home)
      toast(Login_MESSAGES.SUCCESS.replace('{name}', res?.displayName || ''), { type: 'success' })
    },
    onError: err => {
      toast(err.message, { type: 'error' })
    }
  })
  return mutation
}
