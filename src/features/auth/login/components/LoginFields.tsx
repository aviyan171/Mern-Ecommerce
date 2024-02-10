import { useNavigate } from 'react-router-dom';
import Button from 'shared/components/Button';
import FormInput from 'shared/components/form/FormInput';
import { UI_ROUTES } from 'shared/constants';

function LoginFields() {
  const navigate = useNavigate();
  return (
    <div>
      <FormInput label="Email" isRequired name="email" />
      <div className="mt-2">
        <FormInput label="Password" isRequired name="password" />
      </div>
      <div className="mt-3">
        <Button type="submit" fullWidth text="Sign In" />
      </div>
      <div className="mt-3 ">
        <p className="font-bold cursor-pointer">Forgot password ?</p>
      </div>
      <div className="mt-3 ">
        <p className=" text-sm text-center">
          Not a member yet ?
          <span
            className="font-bold cursor-pointer"
            onClick={() => navigate(UI_ROUTES.register)}
          >
            {' '}
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginFields;
