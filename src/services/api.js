import axios from "axios";

const api = axios.create({
  baseURL: "https://my-clone-instagram.herokuapp.com/" //genymotion 10.0.3.2, emulador android 10.0.2.2
});

export default api;
