import { BsX } from 'react-icons/bs';
import { FaPlus } from 'react-icons/fa';
import Button from 'shared/components/Button';
import { AddProductForm } from './AddProductForm';

export function ProductFormRightContent() {
  return (
    <div>
      <div className="shadow-lg rounded-sm p-4">
        <p className="font-bold text-lg">General</p>
        <div className="mt-4">
          <AddProductForm />
        </div>
      </div>
      <div className="flex mt-5 justify-end gap-4 mb-5 ">
        <Button text="Cancel" background="white" suffix icon={<BsX />} />
        <Button type="submit" text="Add Product" suffix icon={<FaPlus />} />
      </div>
    </div>
  );
}
