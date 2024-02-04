import FormInput from 'shared/components/FormInput';

function CheckoutInput() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-7">
        <FormInput name="firstName" label="First Name" />
        <FormInput name="lastName" label="Last Name" />
      </div>
      <div className="mt-5">
        <FormInput name="country" label="Country" />
      </div>
      <div className="mt-5">
        <FormInput name="city" label="City" />
      </div>
      <div className="mt-5">
        <FormInput name="state" label="State" />
      </div>
      <div className="mt-5">
        <FormInput name="zio" label="Zip" />
      </div>
      <div className="grid grid-cols-2 gap-7 mt-5">
        <FormInput name="phone" label="Phone" />
        <FormInput name="email" label="Email" />
      </div>
    </div>
  );
}

export default CheckoutInput;
