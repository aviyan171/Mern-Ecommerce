import Divider from 'shared/components/Divider';

function OrderDetails() {
  return (
    <div className="p-8 bg-alabaster w-full">
      <p className="uppercase font-bold text-2xl pb-6">Your order</p>
      <div className="mb-7">
        <Divider />
      </div>
      <div className="grid grid-cols-2 ">
        <div className="text-start">hi</div>
        <div className="text-end">
          <p>hi</p>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
