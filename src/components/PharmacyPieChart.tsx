import React, { useEffect, useRef } from "react";
import { IProduct } from "../service/ProductService";
import Chart from "chart.js/auto";

interface IPharmacyBarChart {
  products: IProduct[];
}

const PharmacyPieChart: React.FC<IPharmacyBarChart> = ({ products }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  const manufacturerCounter: { [key: string]: number } = {};

  products.forEach((product) => {
    const manufacturerName: string = product.manufacturer.name;

    if (manufacturerCounter[manufacturerName]) {
      manufacturerCounter[manufacturerName]++;
    } else {
      manufacturerCounter[manufacturerName] = 1;
    }
  });

  const manufacturerName: string[] = Object.keys(manufacturerCounter);
  const manufacturerCount: number[] = Object.values(manufacturerCounter);

  const colors: string[] = Array.from(
    { length: products.length },
    () =>
      `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)}, 0.7)`
  );

  useEffect(() => {
    let pieChart: Chart<"pie", unknown[], string>;
    const ctx = chartRef.current!;

    if (ctx) {
      const chartData = {
        labels: manufacturerName,
        datasets: [
          {
            label: "Product Count by Manufacturer",
            data: manufacturerCount,
            backgroundColor: colors,
            borderColor: colors,
            borderWidth: 1,
          },
        ],
      };

      pieChart = new Chart(ctx, {
        type: "pie",
        data: chartData,
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    return () => {
      pieChart.destroy();
    };
  }, []);

  return (
    <div className="pharmacy-pie-chart">
      <h3>Manufacturer products count</h3>

      <canvas id="pieChart" ref={chartRef}></canvas>
    </div>
  );
};

export default PharmacyPieChart;
