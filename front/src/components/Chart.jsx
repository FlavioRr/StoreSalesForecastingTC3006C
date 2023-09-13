import React, { useState, useEffect  } from "react";
import ReactApexChart from "react-apexcharts";

const corporateColors = {
  background: "bg-gray-200",
  button: "bg-gray-700 text-white hover:bg-gray-600",
};

const options = {
  chart: {
    id: "basic-bar",
  },
  xaxis: {
    categories: [
      "AUTOMOTIVE",
      "BABY CARE",
      "BEAUTY",
      "BEVERAGES",
      "BOOKS",
      "BREAD/BAKERY",
      "CELEBRATION",
      "CLEANING",
      "DAIRY",
      "DELI",
      "EGGS",
      "FROZEN FOODS",
      "GROCERY",
      "GROCERY II",
      "HARDWARE",
      "HOME AND KITCHEN I",
      "HOME AND KITCHEN II",
      "HOME APPLIANCES",
      "HOME CARE",
      "LADIESWEAR",
    ],
  },
  colors: [
    "#FF5733"
  ],
};

const Chart = ({chartData}) => {
  const [chartType, setChartType] = useState("bar"); // Estado para el tipo de gráfico
  const [chartKey, setChartKey] = useState(0); // Estado para forzar la actualización del gráfico

  const toggleChartType = () => {
    setChartKey(chartKey + 1);
    setChartType(chartType === "bar" ? "line" : "bar");
  };

  useEffect(() => {
    if (chartData && chartData.prediction) {
      setChartKey(chartKey + 1);
    }
  }, [chartData]);

  return (
    <div className="flex-1 p-6 rounded shadow-md bg-white">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold mb-6">
          Análisis de Ventas ({chartType === "line" ? "Line" : "Bar"})
        </h1>
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
        series={[
            {
              name: "Ventas",
              data: chartData && chartData.prediction ? chartData.prediction : [],
            },
          ]}
        type={chartType}
        height={350}
      />
    </div>
  );
};

export default Chart;