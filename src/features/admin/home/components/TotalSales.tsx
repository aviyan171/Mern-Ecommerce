import { BarChart } from 'shared/components/BarChart';
import { months } from 'shared/constants';

export function TotalSales() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <p className="font-bold text-xl mb-4">Sales This Month</p>
      <div>
        <BarChart
          data={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 130]}
          label="Monthly Sales"
          labels={months}
        />
      </div>
    </div>
  );
}
