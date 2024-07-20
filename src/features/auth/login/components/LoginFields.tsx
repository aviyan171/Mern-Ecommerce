import { GENDER_SELECT } from '../constants'
import FormSelect from 'shared/components/form/FormSelect'

import { FormDatePicker } from 'shared/components/form/FormDatePicker'

function LoginFields() {
  return (
    <div>
      <p className="mb-3">Date of birth</p>
      <FormDatePicker name="dob" />
      <div className="mt-2">
        <p className="mb-3">Gender</p>
        <FormSelect name="gender" data={GENDER_SELECT} />
      </div>
    </div>
  )
}

export default LoginFields

{
  /* 
I   Since only google auth is available commenting this for now

      <div className="mt-3">
        <Button type="submit" fullWidth text="Sign In" />
      </div> */
}
{
  /* <div className="mt-3 ">
        <p className="font-bold cursor-pointer">Forgot password ?</p>
      </div>
      <div className="mt-3 ">
        <p className=" text-sm text-center">
          Not a member yet ?
          <span className="font-bold cursor-pointer" onClick={() => navigate(UI_ROUTES.register)}>
            {' '}
            Sign up
          </span>
        </p>
      </div>
       */
}
