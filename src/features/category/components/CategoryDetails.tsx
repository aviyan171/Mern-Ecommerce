import MaxWidthLayout from 'shared/components/MaxWidthLayout';
import CategoryBar from './CategoryBar';

const CategoryDetails = () => {
  return (
    <div className="py-25">
      <MaxWidthLayout>
        <div className="grid grid-cols-3">
          <div className="col-span-1">
            <CategoryBar />
          </div>
          <div className="col-span-2 ">1233</div>
        </div>
      </MaxWidthLayout>
    </div>
  );
};

export default CategoryDetails;
