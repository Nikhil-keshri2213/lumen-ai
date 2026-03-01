import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const PixelChart = ({ src, title }) => {
  const [rgbData, setRgbData] = useState(null);

  useEffect(() => {
    if (!src) return;

    const img = new Image();

    img.src = src.startsWith("data:")
      ? src
      : `data:image/jpeg;base64,${src}`;

    img.onload = () => {
      const SIZE = 100;
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = SIZE;
      canvas.height = SIZE;

      ctx.drawImage(img, 0, 0, SIZE, SIZE);

      const imageData = ctx.getImageData(0, 0, SIZE, SIZE).data;

      const rBins = new Array(256).fill(0);
      const gBins = new Array(256).fill(0);
      const bBins = new Array(256).fill(0);

      for (let i = 0; i < imageData.length; i += 4) {
        rBins[imageData[i]]++;
        gBins[imageData[i + 1]]++;
        bBins[imageData[i + 2]]++;
      }

      setRgbData({ rBins, gBins, bBins });
    };
  }, [src]);

  if (!rgbData) return null;

  const chartData = {
    labels: Array.from({ length: 256 }, (_, i) => i),
    datasets: [
      {
        label: "Red",
        data: rgbData.rBins,
        backgroundColor: "rgba(255, 0, 0, 1)",
        borderWidth: 0,
      },
      {
        label: "Green",
        data: rgbData.gBins,
        backgroundColor: "rgba(0, 255, 0, 1)",
        borderWidth: 0,
      },
      {
        label: "Blue",
        data: rgbData.bBins,
        backgroundColor: "rgba(0, 0, 255, 1)",
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
      tooltip: {
        callbacks: {
          label: (context) =>
            `${context.dataset.label} Intensity ${context.label}: ${context.raw} pixels`,
        },
      },
    },
    scales: {
      x: { display: false },
      y: {
        display: true,
        grid: { display: false },
      },
    },
  };

  return (
    <div className="rounded-2xl border border-emerald-500/20 bg-zinc-900/60 p-5 shadow-xl">
      <div className="mb-4 flex items-center justify-between">
        <span className="inline-block underline mb-3 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFFF00]">
          {title}
        </span>
        <span className="text-[10px] text-zinc-500">
          RGB Intensity (0 → 255)
        </span>
      </div>

      <div className="h-52 w-full">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default PixelChart;
