import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

const apiService = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
})

export const registerUser = async (userData) => {
    try {
        const response = await apiService.post("/auth/register", userData);
        return response.data;
    } catch (error) {
        console.error("Error registering the user", error);
        throw error;
    }
};
export const loginUser = async (userData) => {
    try {
      const response = await apiService.post('/auth/login', userData);
      return response.data;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  };

export default apiService;