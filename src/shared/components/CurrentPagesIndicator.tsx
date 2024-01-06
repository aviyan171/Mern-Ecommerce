import { BsChevronRight } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';
import MaxWidthLayout from 'shared/components/MaxWidthLayout';

const CurrentPagesIndicator = () => {
  const location = useLocation();
  const locationName = location.pathname.replace('/store/', '');
  return (
    <div className="py-10 bg-alabaster">
      <MaxWidthLayout>
        <p className="mb-2 capitalize">{locationName}</p>
        <div className="flex items-center gap-2">
          <p>Home</p>
          <div className="flex items-center gap-2">
            <BsChevronRight />
            <p className="text-gray-300">{locationName}</p>
          </div>
        </div>
      </MaxWidthLayout>
    </div>
  );
};

export default CurrentPagesIndicator;
