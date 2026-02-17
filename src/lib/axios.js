// lib/axios.js
import axios from "axios";

// Export the domainUrl so it can be used for assets
export const domainUrl = "http://10.5.50.55:8001"; 

const instance = axios.create({
  baseURL: domainUrl + "/api/website/",
});

// Export the default axios instance
export default instance;
