import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LinearScale, CategoryScale, PointElement, LineElement, Tooltip, Legend, ChartOptions, Filler } from "chart.js";
import { ChartDataType } from "@/app/types/DataTypes";

ChartJS.register(LinearScale, CategoryScale, PointElement, LineElement, Tooltip, Legend, Filler);

type DataChartType = {
  chartData: ChartDataType;
};

const DataChart = ({ chartData }: DataChartType) => {
  const options: ChartOptions<"line"> = {
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: "index",
        intersect: false
      }
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false
    },
    scales: {
      y: {
        position: "left",
        ticks: {
          color: "#ccc"
        },
        grid: {
          display: false // خط‌های y-axis رو خاموش کن
        }
      },
      x: {
        ticks: {
          color: "#777"
        },
        grid: {
          display: false
        }
      }
    }
  };

  const styledData: ChartDataType = {
    labels: chartData.labels,
    datasets: chartData.datasets.map((dataset) => ({
      ...dataset,
      borderWidth: 2.5,
      fill: true,
      backgroundColor: (ctx) => {
        const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, "rgba(255, 149, 0, 0.6)");
        gradient.addColorStop(1, "#0D0D0D");
        return gradient;
      },
      tension: 0.25, // صاف‌تر شدن منحنی
      cubicInterpolationMode: "monotone",
      borderColor: "#FF9500",
      pointRadius: 0,
      yAxisID: "y"
    }))
  };

  return <Line data={styledData} options={options} />;
};

export default DataChart;
