import { FaTrash } from 'react-icons/fa';
import Button from 'shared/components/Button';

export function OrderInfo() {
  return (
    <div className="p-2 relative">
      <p className="text-center">Order Info</p>
      <div className="mt-3 text-sm flex flex-col gap-1">
        <p className="font-bold">User Info</p>
        <p>Name : Abhiyan Upreti</p>
        <p>Address : Balaju</p>
        <p>Transaction Id : 122323</p>
      </div>

      <div className="mt-3 text-sm flex flex-col gap-1">
        <p className="font-bold">Amount Info</p>
        <p>Subtotal : 34343434</p>
        <p>Shipping Charge : 0</p>
        <p>Discount : 12</p>
        <p>Total : 12232323</p>
      </div>
      <div className="mt-3 text-sm flex flex-col gap-1">
        <p className="font-bold">Status Info</p>
        <p>Status : Processing</p>
      </div>
      <div className="mt-5 ">
        <Button text="Process Status" fullWidth />
      </div>
      <div className="cursor-pointer absolute top-0 right-[-10px]">
        <FaTrash />
      </div>
    </div>
  );
}
