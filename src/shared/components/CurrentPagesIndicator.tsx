import { BsChevronRight } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';
import MaxWidthLayout from 'shared/components/MaxWidthLayout';

interface IProps {
  center?: boolean;
  children?: React.ReactNode;
}
function CurrentPagesIndicator({ center = false, children = null }: IProps) {
  const location = useLocation();
  const locationName = location.pathname.replace('/store/', '');
  return (
    <div className="py-10 bg-alabaster">
      <MaxWidthLayout>
        <p className={`mb-2 capitalize font-bold ${center && 'text-center'}`}>
          {locationName}
        </p>
        <div
          className={`flex items-center gap-2 ${center && 'justify-center'}`}
        >
          <p>Home</p>
          <div className="flex items-center gap-2">
            <BsChevronRight />
            <p className="text-gray-300">{locationName}</p>
          </div>
        </div>
        {children}
      </MaxWidthLayout>
    </div>
  );
}

export default CurrentPagesIndicator;
