import ELAView from "./ELAView";
import ResultCard from "./ResultCard";
import ImageDetails from "./ImageDetails";
import ModelMetrics from "./ModelMetrics";
import PixelChart from "./PixelChart";

const AnalysisReport = ({ data }) => {
  if (!data) return null;

  return (
    <section className="px-6 py-24 bg-black">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-center text-3xl font-bold text-white">
          Analysis Report
        </h2>

        <div className="grid gap-8 lg:grid-cols-3">
          <ELAView image={data.ela_image} />
          <ResultCard
            result={data.result}
            accuracy={data.accuracy}
            confidence={data.confidence}
          />
          <PixelChart data={data.pixel_distribution} />
          <ImageDetails details={data.image_details} />
          <ModelMetrics metrics={data.model_metrics} />
        </div>
      </div>
    </section>
  );
};

export default AnalysisReport;
