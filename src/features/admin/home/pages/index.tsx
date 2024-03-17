import { GenderRatio } from '../components/GenderRatio.tsx';
import { LatestOrders } from '../components/LatestOrders.tsx';
import { LatestProduct } from '../components/LatestProduct.tsx';
import SiteOverallPerformance from '../components/SiteOverallPerformance';
import SitePerformanceCard from '../components/SitePerformanceCard.tsx';
import { TotalSales } from '../components/TotalSales.tsx';

const Admin = () => {
  return (
    <div>
      <div className="pt-10 pb-4">
        <SiteOverallPerformance />
      </div>
      <div className="grid grid-cols-4 gap-6">
        {Array.from([1, 2, 3, 4], (_, index) => index).map((i) => (
          <SitePerformanceCard key={i} />
        ))}
      </div>
      <div className="flex mt-4 gap-3">
        <div className="flex-[2]">
          <TotalSales />
        </div>
        <div className="flex-1 ">
          <GenderRatio />
        </div>
      </div>
      <div className="flex gap-3 mt-4 mb-4">
        <div className="flex-[1]">
          <LatestProduct />
        </div>
        <div className="flex-[2]">
          <LatestOrders />
        </div>
      </div>
    </div>
  );
};

export default Admin;
