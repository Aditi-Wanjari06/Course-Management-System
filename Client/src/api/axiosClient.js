import axios from 'axios';

const axiosClient = axios.create({
  // During development we call /api and let the proxy handle it.
  // In production we use the VITE_API_URL from .env.
  baseURL: import.meta.env.DEV ? '/api' : `${import.meta.env.VITE_API_URL}/api`,
  withCredentials: true,  // if you need cookies
});

export default axiosClient;
