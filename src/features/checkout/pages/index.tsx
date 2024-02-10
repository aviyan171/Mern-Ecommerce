import CurrentPagesIndicator from 'shared/components/CurrentPagesIndicator';
import MaxWidthLayout from 'shared/layout/MaxWidthLayout';
import CheckoutForm from '../components/CheckoutForm';

function Checkout() {
  return (
    <div>
      <CurrentPagesIndicator />
      <MaxWidthLayout>
        <CheckoutForm />
      </MaxWidthLayout>
    </div>
  );
}

export default Checkout;
