import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.3:3333" //genymotion 10.0.3.2, emulador android 10.0.2.2
});

export default api;
