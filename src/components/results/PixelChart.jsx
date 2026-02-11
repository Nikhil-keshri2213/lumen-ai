import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const PixelChart = ({ data }) => {
  if (!data || data.length === 0) return null;

  const chartData = {
    labels: data.map((_, i) => i),
    datasets: [
      {
        label: "Pixel Intensity",
        data,
      },
    ],
  };

  return (
    <div className="rounded-2xl border border-emerald-500/20 bg-zinc-900/60 p-4">
      <h4 className="mb-3 text-sm font-semibold text-emerald-400">
        Pixel Intensity Distribution
      </h4>
      <Bar data={chartData} />
    </div>
  );
};

export default PixelChart;
