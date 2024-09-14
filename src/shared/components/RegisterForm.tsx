import FormInput from './form/FormInput'

function RegisterForm() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-7 mt-3">
        <FormInput name="country" label="Country" />
        <FormInput name="city" label="City" />
      </div>

      <div className="mt-5">
        <FormInput name="state" label="State" />
      </div>
      <div className="mt-5">
        <FormInput name="pinCode" label="Pin Code" />
      </div>
      <div className="grid grid-cols-2 gap-7 mt-5">
        <FormInput name="phone" label="Phone" />
        <FormInput name="email" label="Email" disabled />
      </div>
    </div>
  )
}

export default RegisterForm
