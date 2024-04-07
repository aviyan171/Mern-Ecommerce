import { OrderInfo } from '../components/OrderInfo';
import { OrderItems } from '../components/OrderItems';

function OrderDetails() {
  return (
    <div className="pt-10 py-4">
      <div className=" flex max-w-[700px] mx-auto gap-2">
        <div className="shadow-lg flex-1 p-2">
          <p className="text-center mb-2">Order Items</p>
          <OrderItems />
        </div>
        <div className=" shadow-lg flex-1">
          <OrderInfo />
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
