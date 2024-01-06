import MaxWidthLayout from 'shared/components/MaxWidthLayout';
import ProductListItems from '../../../../shared/components/ProductListItems';

function ProductListing() {
  return (
    <MaxWidthLayout>
      <div className="pb-15">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-6 ">
          {Array.from([1, 2, 3, 4, 5]).map((item) => {
            return (
              <div key={item}>
                <ProductListItems />
              </div>
            );
          })}
        </div>
      </div>
    </MaxWidthLayout>
  );
}

export default ProductListing;
