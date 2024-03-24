import { BsShop } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Button from 'shared/components/Button';
import { UI_ROUTES } from 'shared/constants';

function SiteOverallPerformance() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between ml-3">
      <div>
        <p className="font-bold ">Admin Dashboard</p>
        <p className="text-xs leading-6 ">Home - DashBoard</p>
      </div>
      <div>
        <Button
          text="Add Product"
          suffix
          icon={<BsShop />}
          onClick={() => navigate(UI_ROUTES.admin.addProduct)}
        />
      </div>
    </div>
  );
}

export default SiteOverallPerformance;
