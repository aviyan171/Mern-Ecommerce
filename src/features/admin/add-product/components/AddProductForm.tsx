import FormInput from 'shared/components/form/FormInput';

export function AddProductForm() {
  return (
    <div>
      <FormInput name="productName" label="Product Name" isRequired />
      <div className="mt-3">
        <FormInput multiline name="description" label="Description" />
      </div>
      <div className="mt-3">
        <FormInput name="stock" label="Stock" type="number" isRequired />
      </div>
      <div className="mt-3">
        <FormInput name="price" label="Price" type="number" isRequired />
      </div>
      <div className="mt-3 mb-2">
        <FormInput
          name="discountedPrice"
          label="Discounted Price"
          type="number"
        />
      </div>
    </div>
  );
}
