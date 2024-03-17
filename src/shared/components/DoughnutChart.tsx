import { ChartData } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { doughnutChartOptions } from 'shared/constants';

export function DoughnutChart({
  labels,
  label,
  colorArray,
  data,
}: {
  labels: string[];
  label: string;
  colorArray: string[];
  data: number[];
}) {
  const options = doughnutChartOptions;
  const doughNutData: ChartData<'doughnut', number[], string> = {
    labels,
    datasets: [
      {
        label,
        data,
        backgroundColor: colorArray,
      },
    ],
  };
  return (
    <div className="w-fit">
      <Doughnut options={options} data={doughNutData} />
    </div>
  );
}
