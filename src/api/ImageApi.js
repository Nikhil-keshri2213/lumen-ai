import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_LUMEN_AI_API_URL ||
  "https://chaavi-ai.onrender.com";

const lumenApi = axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000,
});

lumenApi.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

lumenApi.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error?.response?.data?.detail ||
      error?.response?.data ||
      error.message ||
      "API Error";

    return Promise.reject(message);
  }
);

export const scanImage = async (imageFile) => {
  if (!imageFile) throw new Error("No image file provided");

  const formData = new FormData();
  formData.append("file", imageFile);

  const { data } = await lumenApi.post("/predict", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return data;
};

export const checkHealth = async () => {
  const { data } = await lumenApi.get("/health");
  return data;
};

export default lumenApi;