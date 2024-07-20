import { loginDefaultValues } from 'features/auth/login/constants'
import { FormProvider, useForm } from 'react-hook-form'
import { LoginForm } from '../components/LoginForm'
import { useLoginWithGoogleMutation } from '../service/authService'

const defaultValues = loginDefaultValues

function Login() {
  const methods = useForm({
    defaultValues
  })
  const googleLoginMutation = useLoginWithGoogleMutation()

  const handleSubmit = (data: typeof defaultValues) => {
    googleLoginMutation.mutate({ dob: data.dob, gender: data.gender })
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
