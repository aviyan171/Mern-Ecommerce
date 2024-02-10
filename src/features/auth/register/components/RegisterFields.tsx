import { useNavigate } from 'react-router-dom';
import Button from 'shared/components/Button';
import RegisterForm from 'shared/components/RegisterForm';
import { UI_ROUTES } from 'shared/constants';

function RegisterFields() {
  const navigate = useNavigate();
  return (
    <div>
      <RegisterForm />
      <div className="mt-4">
        <Button text="Register" fullWidth type="submit" />
      </div>
      <div className="mt-3 ">
        <p className=" text-sm text-center">
          Already have account ?
          <span
            className="font-bold cursor-pointer"
            onClick={() => navigate(UI_ROUTES.login)}
          >
            {' '}
            login
          </span>
        </p>
      </div>
    </div>
  );
}

export default RegisterFields;
