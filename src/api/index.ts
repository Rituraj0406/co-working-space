// src/api/api.ts
import axios from 'axios';

export const fetchDataFromApi = async () => {
  const response = await axios.get('https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/data.json');
  return response.data;
};
