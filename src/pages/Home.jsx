import Hero from "../components/hero/Hero";
import UploadBox from "../components/upload/UploadBox";
import Features from "../components/sections/Features";
import HowToUse from "../components/sections/HowToUse";
import About from "../components/sections/About";
import AnalysisReport from "../components/results/AnalysisReport";
import useImageScan from "../hooks/useImageScan";

const Home = () => {
  const { scan, loading, result, error } = useImageScan();

  return (
    <main className="bg-black text-white">
      <Hero />
      <UploadBox onScan={scan} loading={loading} />

      {error && (
        <div className="mt-6 text-center text-sm text-red-500">
          {error}
        </div>
      )}

      {result && <AnalysisReport data={result} />}
      
      <Features />
      <HowToUse />
      <About />
    </main>
  );
};

export default Home;
