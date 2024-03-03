import { BsShop } from 'react-icons/bs';
import Button from 'shared/components/Button';

function SiteOverallPerformance() {
  return (
    <div className="flex justify-between">
      <div>
        <p className="font-bold ">Admin Dashboard</p>
        <p className="text-xs leading-6 ">Home - DashBoard</p>
      </div>
      <div>
        <Button text="Add Product" suffix icon={<BsShop />} />
      </div>
    </div>
  );
}

export default SiteOverallPerformance;
