import { FaSpinner } from 'react-icons/fa';
import Button from 'shared/components/Button';
import CurrentPagesIndicator from 'shared/components/CurrentPagesIndicator';
import MaxWidthLayout from 'shared/components/MaxWidthLayout';
import CartInfo from '../components/CartInfo';
import CartItems from '../components/CartItems';

const Cart = () => {
  return (
    <div>
      <CurrentPagesIndicator />
      <div className="py-25">
        <MaxWidthLayout>
          <div className="grid grid-cols-6  gap-4">
            <div className="col-span-4 ">
              <div className="mb-7">
                <CartInfo />
                <CartItems />
              </div>
              <div className="flex justify-between">
                <Button
                  text="Continue Shopping"
                  onClick={() => ''}
                  background="white"
                />
                <Button
                  text="Update Cart"
                  onClick={() => ''}
                  background="black"
                  suffix
                  icon={<FaSpinner />}
                />
              </div>
            </div>
            <div className=" col-span-2">2</div>
          </div>
        </MaxWidthLayout>
      </div>
    </div>
  );
};

export default Cart;
