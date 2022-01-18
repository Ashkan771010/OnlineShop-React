import axios from "axios";

const apiService = axios.create({
  baseURL: "https://fakestoreapi.com/",
  headers: { "X-Custom-Header": "foobar" },
});

export default apiService;
