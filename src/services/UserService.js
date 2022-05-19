import axios from 'axios';

const baseURL = process.env.VUE_APP_BACKEND_URL || "http://localhost:9090";

class UserService {
  async getAll() {
    const response = await axios.get(`${baseURL}/users`);
    return response.data;
  }
}
export default new UserService();