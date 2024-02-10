import { FormProvider, useForm } from 'react-hook-form';
import { LoginForm } from '../components/LoginForm';

const defaultValues = {
  email: '',
  password: '',
};

function Login() {
  const methods = useForm({
    defaultValues,
  });
  const handleSubmit = (data: typeof defaultValues) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        <LoginForm />
      </form>
    </FormProvider>
  );
}

export default Login;
