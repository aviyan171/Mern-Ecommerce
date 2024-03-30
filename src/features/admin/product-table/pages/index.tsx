import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Button from 'shared/components/Button';
import { UI_ROUTES } from 'shared/constants';
import { ProductTableItems } from '../components/ProductTableItems';

function Products() {
  const navigate = useNavigate();
  return (
    <div className="pt-10 py-4">
      <div className="flex justify-between">
        <p className="font-bold">Product Table</p>
        <Button
          text="Add Product"
          suffix
          icon={<FaPlus />}
          onClick={() => navigate(UI_ROUTES.admin.addProduct)}
        />
      </div>
      <div className="shadow-lg rounded-sm p-4 mt-4">
        <ProductTableItems />
      </div>
    </div>
  );
}

export default Products;
