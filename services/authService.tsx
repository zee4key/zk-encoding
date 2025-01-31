import axios from "axios";
import Cookies from "js-cookie";

const API_URL = "http://localhost:8080/api/auth";

export const authService = {
  async login(username: string, password: string) {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
    });
    const { token, user } = response.data; // Expect user data from backend
    Cookies.set("token", token);
    return { token, user }; // Return both token and user data
  },

  async signup(username: string, email: string, password: string) {
    const response = await axios.post(`${API_URL}/signup`, {
      username,
      email,
      password,
    });
    return response.data;
  },

  logout() {
    Cookies.remove("token");
  },
};
