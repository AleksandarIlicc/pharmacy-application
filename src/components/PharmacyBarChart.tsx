import React, { useEffect, useRef, useState } from "react";
import { IProduct } from "../service/ProductService";
import Chart from "chart.js/auto";

interface IPharmacyBarChart {
  products: IProduct[];
}

const PharmacyBarChart: React.FC<IPharmacyBarChart> = ({ products }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  const sortedProducts = products!.sort((a, b) => a.price - b.price);
  const lowestPriceProducts = sortedProducts!.slice(0, 5);
  const highestPriceProducts = sortedProducts!.slice(-5);
  const combinedProducts = [...lowestPriceProducts, ...highestPriceProducts];

  const lables = combinedProducts.map((product) => product.name);
  const prices = combinedProducts.map((product) => product.price.toFixed(2));

  const colors = Array.from(
    { length: combinedProducts.length },
    () =>
      `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)}, 0.7)`
  );

  useEffect(() => {
    let barChart: Chart<"bar", string[], string>;
    const ctx = chartRef.current!;

    if (ctx) {
      const chartData = {
        labels: lables,
        datasets: [
          {
            label: "Prices",
            data: prices,
            backgroundColor: colors,
            borderColor: colors,
            borderWidth: 1,
          },
        ],
      };

      barChart = new Chart(ctx, {
        type: "bar",
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
      barChart.destroy();
    };
  }, []);

  return (
    <div className="pharmacy-bar-chart">
      <h3>Top 5 most expensive products and top 5 least expensive products</h3>

      <canvas id="bar-chart" ref={chartRef}></canvas>
    </div>
  );
};

export default PharmacyBarChart;
