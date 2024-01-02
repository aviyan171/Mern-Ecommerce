import ProductListItems from './ProductListItems';

function ProductListing() {
  return (
    <div className="max-w-NAVBAR_INNER_WIDTH mx-auto pb-15">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-6 ">
        {Array.from([1, 2, 3, 4, 5]).map((item) => {
          return (
            <>
              <ProductListItems key={item} />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default ProductListing;
