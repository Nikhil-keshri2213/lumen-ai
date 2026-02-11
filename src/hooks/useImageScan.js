import { useState } from "react";
import { scanImage } from "../api/ImageApi.js";

/**
 * Custom hook for LUMEN AI image scanning
 */
const useImageScan = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const scan = async (file) => {
    if (!file) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await scanImage(file);
      setResult(data);
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          "Something went wrong while scanning the image."
      );
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setResult(null);
    setError(null);
    setLoading(false);
  };

  return {
    scan,      // function to trigger scan
    loading,   // boolean
    result,    // API response
    error,     // error message
    reset,     // optional reset
  };
};

export default useImageScan;
