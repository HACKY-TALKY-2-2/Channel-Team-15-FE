import axios from "axios";

export const getMe = async () => {
  const { data: response } = await axios.post("http://192.168.8.10:8080/user/doongdoongInfo");
  return response.data;
};
