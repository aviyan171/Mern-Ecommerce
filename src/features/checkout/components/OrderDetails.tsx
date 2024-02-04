import Button from 'shared/components/Button';
import Divider from 'shared/components/Divider';

function OrderDetails() {
  return (
    <div className="p-8 bg-alabaster w-full">
      <p className="uppercase font-bold text-2xl pb-6">Your order</p>
      <div className="mb-7">
        <Divider />
      </div>
      <div className="flex justify-between mb-4 text-sm">
        <div>Product</div>
        <div>Total</div>
      </div>
      <div className="flex justify-between text-sm ">
        <div className="flex flex-col gap-4">
          <p>01. Vanilla salted caramel</p>
          <p>01. Vanilla salted caramel</p>
          <p>01. Vanilla salted caramel</p>
        </div>
        <div className="flex flex-col gap-4">
          <p>$ 300.0</p>
          <p>$ 300.0</p>
          <p>$ 300.0</p>
        </div>
      </div>
      <div className="py-4">
        <Divider />
      </div>
      <div className="flex justify-between text-sm ">
        <div>
          <p className="mb-2">Subtotal</p>
          <p>Total</p>
        </div>
        <div className="text-red-500">
          <p className="mb-2">$ 5000</p>
          <p>$ 5000</p>
        </div>
      </div>
      <div className="mt-4 mb-6">
        <Divider />
      </div>
      <Button text="Place Order" fullWidth type="submit" />
    </div>
  );
}

export default OrderDetails;
