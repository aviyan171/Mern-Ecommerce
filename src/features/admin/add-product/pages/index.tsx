import { FormProvider, useForm } from 'react-hook-form';
import { ProductFormLeftContent } from '../components/ProductFormLeftContent';
import { ProductFormRightContent } from '../components/ProductFormRightContent';

const defaultValues = {
  productImage: '',
  status: '',
  category: '',
};
export function AddProduct() {
  const methods = useForm({
    defaultValues,
  });

  const onSubmit = (data: typeof defaultValues) => {
    console.log(data);
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="pt-10 py-4 ">
            <p className="font-bold ml-3">Product Form</p>
          </div>
          <div className="flex gap-5 ">
            <div className="flex-[1] ">
              <ProductFormLeftContent />
            </div>
            <div className="flex-[3]">
              <ProductFormRightContent />
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
