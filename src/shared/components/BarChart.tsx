import { ChartData } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { BarChartOptions } from 'shared/constants';

interface IProps {
  label: string;
  data: number[];
  labels: string[];
}
export const BarChart = ({ label, data, labels }: IProps) => {
  const options = BarChartOptions;
  const barData: ChartData<'bar', number[], string> = {
    labels,
    datasets: [
      {
        label: label,
        data,
      },
    ],
  };
  return <Bar data={barData} options={options} />;
};
