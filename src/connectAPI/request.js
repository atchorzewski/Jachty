import axios from "axios";

const request = axios.create({
  baseURL: 'http://localhost:8090/API',
  validateStatus: false
});

export default request