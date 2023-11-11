import axios from "axios";
import { getAccessTokenFromLocalStorage } from "../utils/accessTokenHandler";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const instance = axios.create({
  baseURL: "192.168.8.10:8080",
  headers: {
    Authorization: `Bearer ${getAccessTokenFromLocalStorage()}}`,
  },
});

export default instance;
