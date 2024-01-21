import ProductListItems from 'shared/components/ProductListItems';

function CategoryResults() {
  return (
    <div>
      <div className="flex justify-between mb-10">
        <p>Showing 1–12 of 126 results</p>
        <div className="inline">
          <p>
            Sort by Price:
            <span>
              <select className="focus:outline-none px-5 ">
                <option>Low to High</option>
                <option>$0 - $55</option>
                <option> $55 - $100</option>
              </select>
            </span>
          </p>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-3 gap-x-5 gap-y-10">
          {Array.from([1, 2, 3, 4, 5]).map((item) => {
            return (
              <div key={item}>
                <ProductListItems />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CategoryResults;
