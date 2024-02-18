import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Adjust the URL as per your backend API

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const register = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, { username, email, password });
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};
