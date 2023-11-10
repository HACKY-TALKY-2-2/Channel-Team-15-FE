import axios from "axios";
import { getAccessTokenFromLocalStorage } from "../utils/accessTokenHandler";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

const instance = axios.create({
  baseURL: SERVER_URL,
  headers: {
    Authorization: `Bearer ${getAccessTokenFromLocalStorage()}}`,
  },
});

export default instance;
