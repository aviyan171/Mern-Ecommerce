import Button from 'shared/components/Button';
import FormInput from 'shared/components/form/FormInput';

function LoginFields() {
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
          Not a member yet ?{' '}
          <span className="font-bold cursor-pointer ">Sign up</span>{' '}
        </p>
      </div>
    </div>
  );
}

export default LoginFields;
