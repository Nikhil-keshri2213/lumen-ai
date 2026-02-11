import axios from "axios";

/**
 * LUMEN AI – Image Analysis API
 * Backend: Flask / FastAPI
 */

const API_BASE_URL =
  import.meta.env.VITE_LUMEN_AI_API_URL ||
  "https://chaavi-ai.onrender.com"; // fallback

// Axios instance
const lumenApi = axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000, // AI inference may take time
});

// Request interceptor (optional: auth / logging)
lumenApi.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor (central error handling)
lumenApi.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("LUMEN AI API Error:", error?.response || error);
    return Promise.reject(error);
  }
);

/**
 * Scan image using LUMEN AI
 * @param {File} imageFile
 * @returns AI analysis result
 */
export const scanImage = async (imageFile) => {
  const formData = new FormData();
  formData.append("image", imageFile);

  const response = await lumenApi.post("/predict", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

/**
 * (Optional) Health check
 */
export const checkHealth = async () => {
  const response = await lumenApi.get("/health");
  return response.data;
};

export default lumenApi;