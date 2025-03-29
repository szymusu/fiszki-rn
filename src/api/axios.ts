import Axios from 'axios';

export const axios = Axios.create({
  baseURL: `https://backend-1.w2025.deployed.space/api`,
});
