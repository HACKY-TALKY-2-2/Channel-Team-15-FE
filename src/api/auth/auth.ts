import axios from "axios";
import instance from "../axiosModule";

export const signUp = async (email: string, password: string, name: string) => {
  const { data: response } = await axios.post("http://192.168.8.10:8080/user/signup", {
    email,
    password,
    name,
  });
  return response.data;
};

export const logIn = async (email: string, password: string) => {
  const response = await axios.post("http://192.168.8.10:8080/user/login", {
    email,
    password,
  });
  return response.data;
};

export const logOut = async () => {
  const { data: response } = await instance.get("/user/logout");
  return response.data;
};
