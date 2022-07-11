import { Chart as ChartJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

import './line-chart.styles.css';

const LineChart = ({ label, data }) => {
  const chartData = {
    labels: data.map((data) => data.date),
    datasets: [
      {
        label: label,
        data: data.map((data) => data.value),
        backgroundColor: '#4d4db4',
        borderColor: '#4d4db4',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className='chart'>
      <Line data={chartData} />
    </div>
  );
};

export default LineChart;
