import axios from "axios";

const axiosApiIntances = axios.create({
  baseURL: "http://localhost:4000/api/v1/",
});

export default axiosApiIntances;