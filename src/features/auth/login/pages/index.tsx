import { loginDefaultValues } from 'features/auth/constants';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { UI_ROUTES } from 'shared/constants';
import { LoginForm } from '../components/LoginForm';

const defaultValues = loginDefaultValues;

function Login() {
  const methods = useForm({
    defaultValues,
  });
  const navigate = useNavigate();
  const handleSubmit = (data: typeof defaultValues) => {
    console.log(data);
    navigate(UI_ROUTES.home);
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
