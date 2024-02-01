// api.js
import axios from "axios";

const postVideo = (formData) => {
  return axios.post("http://127.0.0.1:5000/upload", formData);
};

export { postVideo };
