import MaxWidthLayout from 'shared/components/MaxWidthLayout';
import CategoryBar from './CategoryBar';
import CategoryResults from './CategoryResults';

function CategoryDetails() {
  return (
    <div className="py-25">
      <MaxWidthLayout>
        <div className="grid grid-cols-3 gap-10">
          <div className="col-span-1">
            <CategoryBar />
          </div>
          <div className="col-span-2 ">
            <CategoryResults />
          </div>
        </div>
      </MaxWidthLayout>
    </div>
  );
}

export default CategoryDetails;
