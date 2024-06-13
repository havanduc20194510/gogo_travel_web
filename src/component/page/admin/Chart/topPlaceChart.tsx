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
import { getTopPlaceStatistics } from "@/service/chart";
Chart.register(ArcElement, Tooltip, Legend, Filler, Title);

const TopPlaceChart: React.FC = () => {
  const [currentData, setCurrentData] = useState<ChartData<"bar">>();
  const getTopPlaceData = useCallback(async () => {
    try {
      const res = await getTopPlaceStatistics();
      setCurrentData({
        labels: res.data.labels,
        datasets: [
          {
            label: "Top địa điểm nhiều lượt xem nhất",
            data: res.data.data,
            backgroundColor: ["#0c9873"],
            hoverBackgroundColor: ["#0c9873"],
            maxBarThickness: 60,
          },
        ],
      });
    } catch {
      //Do nothing
    }
  }, []);

  useEffect(() => {
    getTopPlaceData();
  }, [getTopPlaceData]);

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
export default TopPlaceChart;
