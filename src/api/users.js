import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000/api/';

export const axiosGetUsers = async () => {
  const { data } = await axios.get('/users');
  return data;
};
