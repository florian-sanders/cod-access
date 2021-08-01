import axios from 'axios';

export default axios.create({
  baseURL: process.env.API_URL || `${document.location.origin}/api`,
  timeout: 5000,
});
