import { FormProvider, useForm } from 'react-hook-form';
import Divider from 'shared/components/Divider';
import MaxWidthLayout from 'shared/components/MaxWidthLayout';
import { checkoutDefaultValues } from '../constants';
import CheckoutInput from './CheckoutInput';

const defaultValues = checkoutDefaultValues;
function CheckoutForm() {
  const methods = useForm({
    defaultValues,
    mode: 'onChange',
  });

  const onSubmit = (data: typeof defaultValues) => {
    console.log(data);
  };
  return (
    <MaxWidthLayout>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="my-10">
            <p className="font-bold pb-6">BILLING DETAILS</p>
            <div className="mb-8">
              <Divider />
            </div>
            <CheckoutInput />
          </div>
        </form>
      </FormProvider>
    </MaxWidthLayout>
  );
}

export default CheckoutForm;
