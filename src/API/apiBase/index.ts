import axios from "axios";

const apiBase = axios.create({
    baseURL: "http://172.16.6.104:8080",
    headers: { Authorization: `bearer ${window.localStorage.getItem("token")} ` },
  });

export default apiBase;

