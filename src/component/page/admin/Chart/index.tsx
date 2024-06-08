import React, { useCallback, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { getMonthlyTotal } from "@/service/chart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const SalesChart: React.FC = () => {
  const [currentData, setCurrentData] = useState<Number[]>([]);

  const getMonthlyTotalData = useCallback(async () => {
    try {
      const res = await getMonthlyTotal();
      setCurrentData(res.data);
    } catch {
      //Do nothing
    }
  }, []);

  useEffect(() => {
    getMonthlyTotalData();
  }, [getMonthlyTotalData]);

  const labels = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];

  const chartData = {
    labels,
    datasets: [
      {
        label: "2024",
        data: currentData,
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Doanh thu vnđ",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
        },
        beginAtZero: true,
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default SalesChart;
