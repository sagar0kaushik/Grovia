import axios from "axios";

const API = axios.create({

  baseURL:"https://grovia-1.onrender.com/api"

});

export default API;