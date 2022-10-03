import React from 'react';

import { pieChartData } from '../../data/pieChart';
import { ChartsHeader, Pie as PieChart } from '../../components';

const Pyramid = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Pie" title="project Cost Breakdown" />
    <div className="w-full">
      <PieChart
        id="chart-pie"
        data={pieChartData}
        legendVisibility
        height="full"
      />
    </div>
  </div>
);

export default Pyramid;
