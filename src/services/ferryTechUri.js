import axios from 'axios';
const BASE_URL = import.meta.env.VITE_SERVER_API;

export const ferryTechUri = axios.create({
  baseURL: BASE_URL,
});