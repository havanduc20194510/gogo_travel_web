import React, { useCallback, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  Filler,
  Title,
} from "chart.js/auto";
import { getTotalGuessStatistics } from "@/service/chart";
Chart.register(ArcElement, Tooltip, Legend, Filler, Title);

const TotalGuestChart: React.FC = () => {
  const [currentData, setCurrentData] = useState<ChartData<"bar">>();
  const getTotalGuessData = useCallback(async () => {
    try {
      const res = await getTotalGuessStatistics();
      setCurrentData({
        labels: res.data.labels,
        datasets: [
          {
            label: "Tổng lượng khách trong tháng",
            data: res.data.data,
            backgroundColor: ["#caba10"],
            hoverBackgroundColor: ["#FFCE56"],
            maxBarThickness: 60,
          },
        ],
      });
    } catch {
      //Do nothing
    }
  }, []);

  useEffect(() => {
    getTotalGuessData();
  }, [getTotalGuessData]);

  return (
    <div>
      {currentData && (
        <Bar
          data={currentData}
          options={{
            maintainAspectRatio: false,
            responsive: true,
          }}
          width={100}
          height={500}
        />
      )}
    </div>
  );
};
export default TotalGuestChart;
