import React, { useCallback, useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js/auto";
import { getTaskStatusStatistics } from "@/service/chart";
import { TaskStatusStatisticsData } from "@/models/chart/chart";
Chart.register(ArcElement, Tooltip, Legend);

const TaskCompletionChart: React.FC = () => {
  const [currentData, setCurrentData] = useState<ChartData<"doughnut">>();
  const getMonthlyTotalData = useCallback(async () => {
    try {
      const res = await getTaskStatusStatistics();
      setCurrentData({
        labels: res.data.labels,
        datasets: [
          {
            data: res.data.data,
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          },
        ],
      });
    } catch {
      //Do nothing
    }
  }, []);

  useEffect(() => {
    getMonthlyTotalData();
  }, [getMonthlyTotalData]);

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed !== null) {
              label += context.parsed;
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "600px", margin: "0 auto" }}>
      <h1 className="my-10 text-center font-bold text-2xl text-[#5a5959]">
        Biểu đồ tỉ lệ hoàn thành task
      </h1>
      {currentData && <Doughnut data={currentData} options={options} />}
    </div>
  );
};

export default TaskCompletionChart;
