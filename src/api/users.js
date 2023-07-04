import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:4000/api/';
axios.defaults.baseURL = 'https://json-server-qp0p.onrender.com/api/';

export const axiosGetUsers = async () => {
  const { data } = await axios.get('/users');
  return data;
};

export const axiosUpdateFollowers = async (userData) => {
  const { data } = await axios.put(`/users/${userData.id}`, userData);
  return data;
};
