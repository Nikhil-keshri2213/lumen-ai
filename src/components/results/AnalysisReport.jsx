import ImageView from "./ImageView";
import PixelChart from "./PixelChart";
import ScanSummary from "./ScanSummary";
import ReportPDFGenerator from "../results/ReportPDF";

const AnalysisReport = ({ data, onBack }) => {
  if (!data) return null;

  return (
    <section className="px-4 sm:px-6 py-16 sm:py-24 bg-black">
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-xs sm:text-sm font-bold tracking-[0.2em] text-zinc-500 uppercase">
            Truth
          </h2>

          <h3 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Final{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFFF00]">
              Result
            </span>
          </h3>

          <p className="mx-auto mt-4 sm:mt-6 max-w-xl text-sm sm:text-lg text-zinc-400">
            Truth Never Lies. Lumen AI revealing hidden insights.
          </p>
        </div>

        {/* ================= BACK BUTTON (NEW POSITION) ================= */}
        <div className="flex justify-end mb-4">
          <button
            onClick={onBack}
            className="px-4 sm:px-5 py-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-xs sm:text-sm text-white transition"
          >
            Back to Scan
          </button>
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid gap-8 
                        grid-cols-1 
                        md:grid-cols-2 
                        lg:grid-cols-3">

          {/* COLUMN 1 - IMAGES */}
          <div className="space-y-8">
            <ImageView
              image={data.original_image}
              title="Original Image"
            />
            <PixelChart
              src={data.original_image}
              title="Pixel Distribution - Original"
            />
            {/* <ImageView
              image={data.ela_image}
              title="ELA Image"
            /> */}
          </div>

          {/* COLUMN 2 - GRAPHS */}
          <div className="space-y-8">
            {/* <PixelChart
              src={data.original_image}
              title="Pixel Distribution - Original"
            /> */}
            <ImageView
              image={data.ela_image}
              title="ELA Image"
            />
            <PixelChart
              src={data.ela_image}
              title="Pixel Distribution - ELA"
            />
          </div>

          {/* COLUMN 3 - SUMMARY */}
          <div className="md:col-span-2 lg:col-span-1">
            <ScanSummary
              result={data.result}
              accuracy={data.accuracy}
              confidence={data.confidence}
              imageData={data.image_data}
              fileInfo={data.file_info}
              modelInfo={data.model_info}
            />
          </div>

        </div>

        {/* ================= DOWNLOAD BUTTON ================= */}
        <div className="mt-8 sm:mt-4 flex justify-center">
          {/* <button
            className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white text-xs sm:text-sm transition"
          >
            Download Report
          </button> */}
           <ReportPDFGenerator data={data} />
        </div>

      </div>
    </section>
  );
};

export default AnalysisReport;
