import { LatestOrders } from 'features/admin/home/components/LatestOrders';

function OrderTable() {
  return (
    <div className="pt-10 py-4">
      <LatestOrders showAllOrders />
    </div>
  );
}

export default OrderTable;
