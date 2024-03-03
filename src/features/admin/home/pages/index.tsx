import SiteOverallPerformance from '../components/SiteOverallPerformance';
import SitePerformanceCard from '../components/SitePerformanceCard.tsx';

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
    </div>
  );
};

export default Admin;
