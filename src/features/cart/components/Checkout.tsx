import { BsCart } from 'react-icons/bs';
import Button from 'shared/components/Button';
import CouponInput from './CouponInput';

function Checkout() {
  return (
    <div>
      <div className="mb-15">
        <CouponInput />
      </div>
      <div className="p-10 bg-alabaster">
        <p className="uppercase">Cart total</p>
        <div className="flex flex-col mt-5 gap-5">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p className=" text-red-500">$ 169.50</p>
          </div>
          <div className="flex justify-between">
            <p>Total</p>
            <p className=" text-red-500">$ 169.50</p>
          </div>
          <Button
            text="Proceed to checkout"
            onClick={() => ''}
            prefix
            icon={<BsCart />}
          />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
