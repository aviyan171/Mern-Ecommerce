import { FormProvider, useForm } from 'react-hook-form';
import Divider from 'shared/components/Divider';
import { checkoutDefaultValues } from '../constants';
import { ICheckoutForm } from '../interface';
import CheckoutInput from './CheckoutInput';
import OrderDetails from './OrderDetails';

const defaultValues = checkoutDefaultValues;
function CheckoutForm() {
  const methods = useForm({
    defaultValues,
    mode: 'onChange',
  });

  const onSubmit = (data: ICheckoutForm) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="my-10">
          <div className="flex gap-10">
            <div className="flex-[3]">
              <p className="font-bold pb-6">BILLING DETAILS</p>
              <div className="mb-8">
                <Divider />
              </div>
              <CheckoutInput />
            </div>
            <div className="flex-[2]">
              <OrderDetails />
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

export default CheckoutForm;
