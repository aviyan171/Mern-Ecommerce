import { AddProductImage } from './AddProductImage';
import { LeftContentDropDown } from './LeftContentDropDown';

export function ProductFormLeftContent() {
  const mockData = [
    {
      label: 'Published',
      value: 'published',
    },
    {
      label: 'Draft',
      value: 'draft',
    },
  ];
  const categoryDropDown = [
    {
      label: 'Headset',
      value: 'headset',
    },
    {
      label: 'Computer',
      value: 'computer',
    },
  ];
  return (
    <div className="sticky top-0">
      <AddProductImage />
      <div className="mt-6">
        <LeftContentDropDown
          name="status"
          defaultOptionName="Set your product status"
          data={mockData}
          desc="Set the product status."
          title="Status"
        />
      </div>
      <div className="mt-6">
        <LeftContentDropDown
          name="category"
          defaultOptionName="Set your product category"
          data={categoryDropDown}
          desc="Add product to a category."
          title="Categories"
        />
      </div>
    </div>
  );
}
