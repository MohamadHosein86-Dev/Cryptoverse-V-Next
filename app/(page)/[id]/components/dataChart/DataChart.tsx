import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LinearScale, CategoryScale, PointElement, LineElement, Tooltip, Legend, ChartOptions, Filler, Chart } from "chart.js";
import { ChartDataType } from "@/app/types/DataTypes";
import { useRef } from "react";

ChartJS.register(LinearScale, CategoryScale, PointElement, LineElement, Tooltip, Legend, Filler);

type DataChartType = {
  chartData: ChartDataType;
};

const glowLinePlugin = {
  id: "glowLine",
  beforeDatasetsDraw: (chart: Chart) => {
    const ctx = chart.ctx;
    ctx.save();
    ctx.shadowColor = "#FF9500";
    ctx.shadowBlur = 18;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
  },
  afterDatasetsDraw: (chart: Chart) => {
    const ctx = chart.ctx;
    ctx.restore();
  }
};

function movingAverage(data: number[], windowSize = 5): number[] {
  return data.map((val, idx, arr) => {
    const start = Math.max(0, idx - Math.floor(windowSize / 2));
    const end = Math.min(arr.length, idx + Math.ceil(windowSize / 2));
    const window = arr.slice(start, end);
    return window.reduce((sum, v) => sum + v, 0) / window.length;
  });
}

const DataChart = ({ chartData }: DataChartType) => {
  const chartRef = useRef(null);

  const options: ChartOptions<"line"> = {
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: "index",
        intersect: false
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false
    },
    scales: {
      y: {
        position: "left",
        ticks: {
          color: "#ccc",
          font: { size: 14 }
        },
        grid: {
          display: false
        }
      },
      x: {
        ticks: {
          color: "#777",
          font: { size: 12 }
        },
        grid: {
          display: false
        }
      }
    }
  };

  const smoothedDatasets = chartData.datasets.map((dataset) => ({
    ...dataset,
    data: movingAverage(dataset.data as number[], 100)
  }));

  const styledData: ChartDataType = {
    labels: chartData.labels,
    datasets: smoothedDatasets.map((dataset) => ({
      ...dataset,
      borderWidth: 3.5,
      fill: true,
      backgroundColor: (ctx) => {
        const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, ctx.chart.height);
        gradient.addColorStop(0, "rgba(255, 149, 0, 0.7)");
        gradient.addColorStop(1, "rgba(13,13,13,1)");
        return gradient;
      },
      tension: 1,
      borderColor: "#FF9500",
      pointRadius: 0,
      pointHoverRadius: 0,
      yAxisID: "y"
    }))
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <Line ref={chartRef} data={styledData} options={options} plugins={[glowLinePlugin]} />
    </div>
  );
};

export default DataChart;
