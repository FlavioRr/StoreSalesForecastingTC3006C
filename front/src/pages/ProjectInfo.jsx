import React, { useState } from 'react';
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
    categories: [
      'AUTOMOTIVE', 'BABY CARE', 'BEAUTY', 'BEVERAGES', 'BOOKS', 'BREAD/BAKERY', 'CELEBRATION', 'CLEANING', 'DAIRY', 'DELI', 'EGGS', 'FROZEN FOODS', 'GROCERY', 'GROCERY II', 'HARDWARE', 'HOME AND KITCHEN I', 'HOME AND KITCHEN II', 'HOME APPLIANCES', 'HOME CARE', 'LADIESWEAR'
    ],
  },
  colors: [
    '#FF5733',
    '#33FF6E',
    '#3366FF',
    '#FF33A8',
    '#FFFF33',
    '#33FFFA',
    '#FF3366',
    '#33FF33',
    '#FF5733',
    '#33FF6E',
    '#3366FF',
    '#FF33A8',
    '#FFFF33',
    '#33FFFA',
    '#FF3366',
    '#33FF33',
    '#FF5733',
    '#33FF6E',
    '#3366FF',
    '#FF33A8',
  ],
};

const initialSeries = [
  {
    name: 'Ventas',
    data: [200, 300, 500, 200, 500, 50, 700, 300, 500, 500, 500, 100, 100, 500, 0, 20, 500, 500, 500, 500],
  },
];

const ProjectInfo = () => {
  const [chartType, setChartType] = useState('bar'); // Estado para el tipo de gráfico
  const [chartKey, setChartKey] = useState(0); // Estado para forzar la actualización del gráfico

  // Función para cambiar entre los tipos de gráficos
  const toggleChartType = () => {
    setChartKey(chartKey + 1);
    setChartType(chartType === 'bar' ? 'line' : 'bar');
  };

  return (
    <div className={`min-h-screen flex ${corporateColors.background}`}>
      <div className="overflow-y-auto h-full w-1/3 p-6 rounded shadow-md bg-white">
        <Form />
      </div>
      <div className="flex-1 p-6 rounded shadow-md bg-white">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold mb-6">Análisis de Ventas ({chartType === 'line' ? 'Line' : 'Bar'})</h1>
          <button
            className={`p-2 rounded ${corporateColors.button}`}
            onClick={toggleChartType}
          >
            Cambiar Tipo de Gráfico
          </button>
        </div>
        <ReactApexChart
          key={chartKey} // Esto forzará la actualización del gráfico
          options={options}
          series={initialSeries}
          type={chartType}
          height={350}
        />
      </div>
    </div>
  );
};

export default ProjectInfo;
