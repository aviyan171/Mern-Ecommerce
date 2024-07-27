import { loginDefaultValues } from 'features/auth/login/constants'
import { FormProvider, useForm } from 'react-hook-form'
import { LoginForm } from '../components/LoginForm'
import { useLoginWithGoogleMutation } from '../service/authService'
import { setAuthState } from 'features/auth/utils/auth-utils'
import { useAppDispatch } from 'shared/store/hooks'
import { Gender } from '../enum/login-enum'

const defaultValues = loginDefaultValues

function Login() {
  const methods = useForm({
    defaultValues
  })
  const googleLoginMutation = useLoginWithGoogleMutation()
  const dispatch = useAppDispatch()

  const handleSubmit = (data: typeof defaultValues) => {
    googleLoginMutation.mutate(
      { dob: data.dob!, gender: data.gender! },
      {
        onSuccess(res) {
          setAuthState({
            dispatch,
            user: res,
            dob: data.dob as Date,
            gender: data.gender as Gender
          })
        }
      }
    )
  }
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        <LoginForm />
      </form>
    </FormProvider>
  )
}

export default Login
