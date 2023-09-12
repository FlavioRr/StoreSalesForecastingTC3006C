import React from 'react';
import ReactApexChart from 'react-apexcharts';
import Form from '../components/Form';

const corporateColors = {
  background: 'bg-gray-200',
  button: 'bg-gray-700 text-white hover:bg-gray-600',
};

const options = {
  chart: {
    id: 'basic-bar',
  },
  xaxis: {
    categories: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
  },
};

const series = [
  {
    name: 'Ventas',
    data: [100, 150, 200, 180, 220],
  },
];

const ProjectInfo = () => {
  return (
    <div className={`min-h-screen flex ${corporateColors.background}`}>
	  <div className="overflow-y-auto h-full w-1/3 p-6 rounded shadow-md bg-white">
		<Form />
	  </div>
      <div className="flex-1 p-6 rounded shadow-md bg-white">
        <h1 className="text-3xl font-semibold mb-6">Análisis de Ventas</h1>
		<ReactApexChart options={options} series={series} type="bar" height={350} />
      </div>
	  
    </div>
  );
};

export default ProjectInfo;
