import axios from 'axios';

const api = axios.create({
  baseURL: 'htpps://api.github.com',
});

export default api;