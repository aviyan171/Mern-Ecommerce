import FormCheckBox from 'shared/components/form/FormCheckBox';
import FormInput from 'shared/components/form/FormInput';

function CheckoutInput() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-7">
        <FormInput name="firstName" label="First Name" isRequired />
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
        <FormInput name="zip" label="Zip" />
      </div>
      <div className="grid grid-cols-2 gap-7 mt-5">
        <FormInput name="phone" label="Phone" />
        <FormInput name="email" label="Email" />
      </div>
      <div className="mt-5">
        <FormCheckBox name="createAccount" label="Create an account?" />
      </div>
      <p className="mt-4 text-sm">
        Create an account by entering the information below. If you are a
        returning customer please login at the top of the page
      </p>
      <div className="mt-5">
        <FormInput name="accountPassword" label="Account Password" />
      </div>

      <div className="mt-5">
        <FormInput name="orderNotes" label="Order Notes" />
      </div>
    </div>
  );
}

export default CheckoutInput;
