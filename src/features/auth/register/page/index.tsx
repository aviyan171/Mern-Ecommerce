import { registerDefaultValues } from 'features/auth/login/constants'
import { IRegisterForm } from 'features/auth/interface'
import { FormProvider, useForm } from 'react-hook-form'
import RegisterFields from '../components/RegisterFields'

const defaultValues = registerDefaultValues
const Register = () => {
  const methods = useForm({
    defaultValues
  })

  const handleSubmit = (data: IRegisterForm) => {
    console.log(data)
  }
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        <RegisterFields />
      </form>
    </FormProvider>
  )
}

export default Register
