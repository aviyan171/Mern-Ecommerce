import FormInput from './form/FormInput'

function RegisterForm() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-7 mt-3">
        <FormInput name="country" label="Country" isRequired />
        <FormInput name="city" label="City" isRequired />
      </div>

      <div className="mt-5">
        <FormInput name="state" label="State" isRequired />
      </div>
      <div className="mt-5">
        <FormInput name="pinCode" label="Pin Code" isRequired />
      </div>
      <div className="grid grid-cols-2 gap-7 mt-5">
        <FormInput name="phone" label="Phone" maskedInput isRequired />
        <FormInput name="email" label="Email" disabled isRequired />
      </div>
    </div>
  )
}

export default RegisterForm
